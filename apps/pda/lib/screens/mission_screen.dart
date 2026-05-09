import 'package:flutter/material.dart';
import '../services/mission_service.dart';

class MissionScreen extends StatefulWidget {
  final Map<String, dynamic> mission;
  final String token;

  const MissionScreen({super.key, required this.mission, required this.token});

  @override
  State<MissionScreen> createState() => _MissionScreenState();
}

class _MissionScreenState extends State<MissionScreen> {
  final MissionService _missionService = MissionService();
  bool _loading = false;
  late String _currentStatus;

  final List<Map<String, String>> _statusFlow = [
    {'status': 'ASSIGNED', 'label': 'Assignée', 'action': 'Partir en mission', 'next': 'EN_ROUTE_PICKUP'},
    {'status': 'EN_ROUTE_PICKUP', 'label': 'En route', 'action': 'Arrivé chez le patient', 'next': 'AT_PICKUP'},
    {'status': 'AT_PICKUP', 'label': 'Sur place', 'action': 'Patient à bord', 'next': 'EN_ROUTE_DROPOFF'},
    {'status': 'EN_ROUTE_DROPOFF', 'label': 'En transport', 'action': 'Arrivé à destination', 'next': 'COMPLETED'},
    {'status': 'COMPLETED', 'label': 'Terminée', 'action': '', 'next': ''},
  ];

  @override
  void initState() {
    super.initState();
    _currentStatus = widget.mission['status'] ?? 'ASSIGNED';
  }

  Future<void> _updateStatus(String newStatus) async {
    setState(() => _loading = true);

    final success = await _missionService.updateStatus(
      token: widget.token,
      missionId: widget.mission['id'],
      status: newStatus,
      lat: 47.2184,
      lng: -1.5534,
    );

    setState(() {
      _loading = false;
      if (success) _currentStatus = newStatus;
    });

    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(success ? '✅ Statut mis à jour' : '❌ Erreur mise à jour'),
          backgroundColor: success ? const Color(0xFF14B8A6) : const Color(0xFFEF4444),
        ),
      );
    }
  }

  Map<String, String>? get _currentStep {
    try {
      return _statusFlow.firstWhere((s) => s['status'] == _currentStatus);
    } catch (_) {
      return null;
    }
  }

  @override
  Widget build(BuildContext context) {
    final mission = widget.mission;
    final patient = mission['patient'];
    final step = _currentStep;

    return Scaffold(
      appBar: AppBar(
        title: Text('Mission ${mission['id'].toString().substring(0, 8).toUpperCase()}'),
        leading: IconButton(
          icon: const Icon(Icons.arrow_back, color: Color(0xFF14B8A6)),
          onPressed: () => Navigator.pop(context),
        ),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [

            // Statut actuel
            Container(
              width: double.infinity,
              padding: const EdgeInsets.all(20),
              decoration: BoxDecoration(
                gradient: const LinearGradient(
                  colors: [Color(0xFF14B8A6), Color(0xFF3B82F6)],
                ),
                borderRadius: BorderRadius.circular(14),
              ),
              child: Column(
                children: [
                  Text(
                    step?['label'] ?? _currentStatus,
                    style: const TextStyle(
                      color: Colors.white,
                      fontSize: 20,
                      fontWeight: FontWeight.w700,
                    ),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    'Priorité: ${mission['priority'] ?? 'P3'}',
                    style: const TextStyle(color: Colors.white70, fontSize: 14),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 16),

            // Infos patient
            if (patient != null) ...[
              _infoCard('👤 Patient', [
                '${patient['lastName']} ${patient['firstName']}',
                if (patient['nss'] != null) 'NSS: ${patient['nss']}',
                if (patient['mobility'] != null) 'Mobilité: ${patient['mobility']}',
              ]),
              const SizedBox(height: 12),
            ],

            // Adresse
            _infoCard('📍 Trajet', [
              mission['address'] ?? 'Non renseignée',
            ]),
            const SizedBox(height: 12),

            // Notes
            if (mission['notes'] != null && mission['notes'].toString().isNotEmpty) ...[
              _infoCard('📝 Notes', [mission['notes']]),
              const SizedBox(height: 12),
            ],

            // Bouton action principal
            if (step != null && step['next']!.isNotEmpty) ...[
              const SizedBox(height: 8),
              ElevatedButton(
                onPressed: _loading ? null : () => _updateStatus(step['next']!),
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xFF14B8A6),
                  minimumSize: const Size(double.infinity, 56),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(14),
                  ),
                ),
                child: _loading
                    ? const CircularProgressIndicator(color: Colors.white)
                    : Text(
                        step['action']!,
                        style: const TextStyle(
                          fontSize: 16,
                          fontWeight: FontWeight.w700,
                        ),
                      ),
              ),
              const SizedBox(height: 12),
            ],

            // Bouton SOS
            OutlinedButton.icon(
              onPressed: () {
                showDialog(
                  context: context,
                  builder: (_) => AlertDialog(
                    backgroundColor: const Color(0xFF0D1017),
                    title: const Text('🆘 Alerte SOS', style: TextStyle(color: Colors.white)),
                    content: const Text(
                      'Confirmer l\'envoi d\'une alerte d\'urgence à la régulation ?',
                      style: TextStyle(color: Color(0xFF6B7A99)),
                    ),
                    actions: [
                      TextButton(
                        onPressed: () => Navigator.pop(context),
                        child: const Text('Annuler', style: TextStyle(color: Color(0xFF6B7A99))),
                      ),
                      ElevatedButton(
                        onPressed: () {
                          Navigator.pop(context);
                          ScaffoldMessenger.of(context).showSnackBar(
                            const SnackBar(
                              content: Text('🆘 Alerte envoyée à la régulation'),
                              backgroundColor: Color(0xFFEF4444),
                            ),
                          );
                        },
                        style: ElevatedButton.styleFrom(backgroundColor: const Color(0xFFEF4444)),
                        child: const Text('Confirmer SOS'),
                      ),
                    ],
                  ),
                );
              },
              icon: const Icon(Icons.sos, color: Color(0xFFEF4444)),
              label: const Text('SOS Régulation', style: TextStyle(color: Color(0xFFEF4444))),
              style: OutlinedButton.styleFrom(
                minimumSize: const Size(double.infinity, 48),
                side: const BorderSide(color: Color(0xFFEF4444)),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _infoCard(String title, List<String> items) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: const Color(0xFF0D1017),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: const Color(0xFF1E2535)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            title,
            style: const TextStyle(
              color: Color(0xFF6B7A99),
              fontSize: 12,
              fontWeight: FontWeight.w600,
            ),
          ),
          const SizedBox(height: 8),
          ...items.map((item) => Padding(
            padding: const EdgeInsets.only(bottom: 4),
            child: Text(
              item,
              style: const TextStyle(color: Color(0xFFE8ECF5), fontSize: 14),
            ),
          )),
        ],
      ),
    );
  }
}
