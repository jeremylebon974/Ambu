import 'package:flutter/material.dart';
import '../services/auth_service.dart';
import '../services/mission_service.dart';
import 'login_screen.dart';
import 'mission_screen.dart';

class DashboardScreen extends StatefulWidget {
  const DashboardScreen({super.key});

  @override
  State<DashboardScreen> createState() => _DashboardScreenState();
}

class _DashboardScreenState extends State<DashboardScreen> {
  final AuthService _auth = AuthService();
  final MissionService _missionService = MissionService();

  Map<String, dynamic>? _user;
  List<Map<String, dynamic>> _missions = [];
  bool _loading = true;
  String? _token;

  @override
  void initState() {
    super.initState();
    _loadData();
  }

  Future<void> _loadData() async {
    final token = await _auth.getToken();
    final user = await _auth.getUser();

    if (token == null) {
      if (mounted) {
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (_) => const LoginScreen()),
        );
      }
      return;
    }

    final missions = await _missionService.getMyMissions(token);

    setState(() {
      _token = token;
      _user = user;
      _missions = missions;
      _loading = false;
    });
  }

  Future<void> _logout() async {
    await _auth.logout();
    if (mounted) {
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (_) => const LoginScreen()),
      );
    }
  }

  Color _statusColor(String status) {
    switch (status) {
      case 'PENDING': return const Color(0xFFF59E0B);
      case 'ASSIGNED': return const Color(0xFF3B82F6);
      case 'EN_ROUTE_PICKUP': return const Color(0xFF8B5CF6);
      case 'AT_PICKUP': return const Color(0xFF14B8A6);
      case 'EN_ROUTE_DROPOFF': return const Color(0xFF06B6D4);
      case 'COMPLETED': return const Color(0xFF22C55E);
      default: return const Color(0xFF6B7A99);
    }
  }

  String _statusLabel(String status) {
    switch (status) {
      case 'PENDING': return 'En attente';
      case 'ASSIGNED': return 'Assignée';
      case 'EN_ROUTE_PICKUP': return 'En route';
      case 'AT_PICKUP': return 'Sur place';
      case 'EN_ROUTE_DROPOFF': return 'En transport';
      case 'COMPLETED': return 'Terminée';
      default: return status;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text('🚑 ', style: TextStyle(fontSize: 20)),
            Text('PDA Ambulancier'),
          ],
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.refresh, color: Color(0xFF14B8A6)),
            onPressed: _loadData,
          ),
          IconButton(
            icon: const Icon(Icons.logout, color: Color(0xFF6B7A99)),
            onPressed: _logout,
          ),
        ],
      ),
      body: _loading
          ? const Center(child: CircularProgressIndicator(color: Color(0xFF14B8A6)))
          : RefreshIndicator(
              onRefresh: _loadData,
              color: const Color(0xFF14B8A6),
              child: ListView(
                padding: const EdgeInsets.all(16),
                children: [
                  // Info utilisateur
                  Container(
                    padding: const EdgeInsets.all(16),
                    decoration: BoxDecoration(
                      color: const Color(0xFF0D1017),
                      borderRadius: BorderRadius.circular(12),
                      border: Border.all(color: const Color(0xFF1E2535)),
                    ),
                    child: Row(
                      children: [
                        Container(
                          width: 44,
                          height: 44,
                          decoration: BoxDecoration(
                            color: const Color(0xFF14B8A6).withOpacity(0.15),
                            borderRadius: BorderRadius.circular(22),
                          ),
                          child: const Icon(Icons.person, color: Color(0xFF14B8A6)),
                        ),
                        const SizedBox(width: 12),
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              '${_user?['firstName'] ?? ''} ${_user?['lastName'] ?? ''}',
                              style: const TextStyle(
                                color: Color(0xFFE8ECF5),
                                fontWeight: FontWeight.w600,
                                fontSize: 15,
                              ),
                            ),
                            Text(
                              _user?['role'] ?? '',
                              style: const TextStyle(
                                color: Color(0xFF6B7A99),
                                fontSize: 12,
                              ),
                            ),
                          ],
                        ),
                        const Spacer(),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                          decoration: BoxDecoration(
                            color: const Color(0xFF14B8A6).withOpacity(0.1),
                            borderRadius: BorderRadius.circular(20),
                            border: Border.all(color: const Color(0xFF14B8A6).withOpacity(0.3)),
                          ),
                          child: const Text(
                            '● EN SERVICE',
                            style: TextStyle(color: Color(0xFF14B8A6), fontSize: 10),
                          ),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 16),

                  // Titre missions
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      const Text(
                        'Mes missions',
                        style: TextStyle(
                          color: Color(0xFFE8ECF5),
                          fontSize: 16,
                          fontWeight: FontWeight.w700,
                        ),
                      ),
                      Text(
                        '${_missions.length} mission(s)',
                        style: const TextStyle(color: Color(0xFF6B7A99), fontSize: 13),
                      ),
                    ],
                  ),
                  const SizedBox(height: 12),

                  // Liste missions
                  if (_missions.isEmpty)
                    Container(
                      padding: const EdgeInsets.all(32),
                      decoration: BoxDecoration(
                        color: const Color(0xFF0D1017),
                        borderRadius: BorderRadius.circular(12),
                        border: Border.all(color: const Color(0xFF1E2535)),
                      ),
                      child: const Column(
                        children: [
                          Text('📋', style: TextStyle(fontSize: 40)),
                          SizedBox(height: 12),
                          Text(
                            'Aucune mission assignée',
                            style: TextStyle(color: Color(0xFF6B7A99), fontSize: 14),
                          ),
                        ],
                      ),
                    )
                  else
                    ...(_missions.map((mission) => GestureDetector(
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (_) => MissionScreen(
                              mission: mission,
                              token: _token!,
                            ),
                          ),
                        ).then((_) => _loadData());
                      },
                      child: Container(
                        margin: const EdgeInsets.only(bottom: 10),
                        padding: const EdgeInsets.all(16),
                        decoration: BoxDecoration(
                          color: const Color(0xFF0D1017),
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(color: const Color(0xFF1E2535)),
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Text(
                                  mission['id'].toString().substring(0, 8).toUpperCase(),
                                  style: const TextStyle(
                                    color: Color(0xFF6B7A99),
                                    fontSize: 12,
                                    fontFamily: 'monospace',
                                  ),
                                ),
                                Container(
                                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                                  decoration: BoxDecoration(
                                    color: _statusColor(mission['status']).withOpacity(0.1),
                                    borderRadius: BorderRadius.circular(20),
                                    border: Border.all(
                                      color: _statusColor(mission['status']).withOpacity(0.4),
                                    ),
                                  ),
                                  child: Text(
                                    _statusLabel(mission['status']),
                                    style: TextStyle(
                                      color: _statusColor(mission['status']),
                                      fontSize: 11,
                                    ),
                                  ),
                                ),
                              ],
                            ),
                            const SizedBox(height: 8),
                            Text(
                              mission['address'] ?? 'Adresse non renseignée',
                              style: const TextStyle(
                                color: Color(0xFFE8ECF5),
                                fontSize: 14,
                                fontWeight: FontWeight.w500,
                              ),
                            ),
                            if (mission['patient'] != null) ...[
                              const SizedBox(height: 4),
                              Text(
                                '👤 ${mission['patient']['lastName']} ${mission['patient']['firstName']}',
                                style: const TextStyle(
                                  color: Color(0xFF6B7A99),
                                  fontSize: 13,
                                ),
                              ),
                            ],
                            const SizedBox(height: 8),
                            Row(
                              children: [
                                Container(
                                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                                  decoration: BoxDecoration(
                                    color: const Color(0xFF111622),
                                    borderRadius: BorderRadius.circular(6),
                                  ),
                                  child: Text(
                                    mission['priority'] ?? 'P3',
                                    style: const TextStyle(
                                      color: Color(0xFF6B7A99),
                                      fontSize: 11,
                                      fontFamily: 'monospace',
                                    ),
                                  ),
                                ),
                                const Spacer(),
                                const Text(
                                  'Voir détails →',
                                  style: TextStyle(
                                    color: Color(0xFF14B8A6),
                                    fontSize: 12,
                                  ),
                                ),
                              ],
                            ),
                          ],
                        ),
                      ),
                    ))),
                ],
              ),
            ),
    );
  }
}
