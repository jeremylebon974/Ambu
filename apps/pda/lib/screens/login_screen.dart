import 'package:flutter/material.dart';
import '../services/auth_service.dart';
import 'dashboard_screen.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  final _vehicleController = TextEditingController();
  bool _loading = false;
  String? _error;

  Future<void> _login() async {
    setState(() { _loading = true; _error = null; });

    final auth = AuthService();
    final result = await auth.login(
      email: _emailController.text.trim(),
      password: _passwordController.text.trim(),
      vehicleId: _vehicleController.text.trim(),
    );

    setState(() { _loading = false; });

    if (result != null && mounted) {
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (_) => const DashboardScreen()),
      );
    } else {
      setState(() { _error = 'Identifiants incorrects'; });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              // Logo
              Container(
                width: 72,
                height: 72,
                decoration: BoxDecoration(
                  gradient: const LinearGradient(
                    colors: [Color(0xFF14B8A6), Color(0xFF3B82F6)],
                  ),
                  borderRadius: BorderRadius.circular(18),
                ),
                child: const Center(
                  child: Text('🚑', style: TextStyle(fontSize: 36)),
                ),
              ),
              const SizedBox(height: 24),
              const Text(
                'Paille en Queue',
                style: TextStyle(
                  color: Color(0xFFE8ECF5),
                  fontSize: 24,
                  fontWeight: FontWeight.w800,
                ),
              ),
              const Text(
                'Terminal ambulancier',
                style: TextStyle(color: Color(0xFF6B7A99), fontSize: 14),
              ),
              const SizedBox(height: 40),

              // Email
              TextField(
                controller: _emailController,
                keyboardType: TextInputType.emailAddress,
                style: const TextStyle(color: Color(0xFFE8ECF5)),
                decoration: InputDecoration(
                  labelText: 'Email',
                  labelStyle: const TextStyle(color: Color(0xFF6B7A99)),
                  filled: true,
                  fillColor: const Color(0xFF111622),
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(12),
                    borderSide: const BorderSide(color: Color(0xFF2A3348)),
                  ),
                  enabledBorder: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(12),
                    borderSide: const BorderSide(color: Color(0xFF2A3348)),
                  ),
                  prefixIcon: const Icon(Icons.email, color: Color(0xFF6B7A99)),
                ),
              ),
              const SizedBox(height: 16),

              // Password
              TextField(
                controller: _passwordController,
                obscureText: true,
                style: const TextStyle(color: Color(0xFFE8ECF5)),
                decoration: InputDecoration(
                  labelText: 'Mot de passe',
                  labelStyle: const TextStyle(color: Color(0xFF6B7A99)),
                  filled: true,
                  fillColor: const Color(0xFF111622),
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(12),
                    borderSide: const BorderSide(color: Color(0xFF2A3348)),
                  ),
                  enabledBorder: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(12),
                    borderSide: const BorderSide(color: Color(0xFF2A3348)),
                  ),
                  prefixIcon: const Icon(Icons.lock, color: Color(0xFF6B7A99)),
                ),
              ),
              const SizedBox(height: 16),

              // Vehicle ID
              TextField(
                controller: _vehicleController,
                style: const TextStyle(color: Color(0xFFE8ECF5)),
                decoration: InputDecoration(
                  labelText: 'ID Véhicule',
                  labelStyle: const TextStyle(color: Color(0xFF6B7A99)),
                  filled: true,
                  fillColor: const Color(0xFF111622),
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(12),
                    borderSide: const BorderSide(color: Color(0xFF2A3348)),
                  ),
                  enabledBorder: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(12),
                    borderSide: const BorderSide(color: Color(0xFF2A3348)),
                  ),
                  prefixIcon: const Icon(Icons.local_hospital, color: Color(0xFF6B7A99)),
                ),
              ),
              const SizedBox(height: 24),

              // Error
              if (_error != null)
                Container(
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: const Color(0x1AEF4444),
                    borderRadius: BorderRadius.circular(8),
                    border: Border.all(color: const Color(0x4DEF4444)),
                  ),
                  child: Text(
                    _error!,
                    style: const TextStyle(color: Color(0xFFFCA5A5)),
                    textAlign: TextAlign.center,
                  ),
                ),

              const SizedBox(height: 16),

              // Login button
              ElevatedButton(
                onPressed: _loading ? null : _login,
                child: _loading
                    ? const CircularProgressIndicator(color: Colors.white, strokeWidth: 2)
                    : const Text(
                        'Se connecter',
                        style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600),
                      ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
