import 'dart:convert';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:http/http.dart' as http;

class AuthService {
  static const String _baseUrl = 'http://10.0.2.2:3001';
  static const String _tokenKey = 'pda_token';
  static const String _userKey = 'pda_user';

  final FlutterSecureStorage _storage = const FlutterSecureStorage();

  Future<Map<String, dynamic>?> login({
    required String email,
    required String password,
    required String vehicleId,
    String deviceId = 'PDA-001',
  }) async {
    try {
      final response = await http.post(
        Uri.parse('$_baseUrl/pda/login'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({
          'email': email,
          'password': password,
          'vehicleId': vehicleId,
          'deviceId': deviceId,
        }),
      );

      if (response.statusCode == 200 || response.statusCode == 201) {
        final data = jsonDecode(response.body);
        await _storage.write(key: _tokenKey, value: data['token']);
        await _storage.write(key: _userKey, value: jsonEncode(data['user']));
        return data;
      }
      return null;
    } catch (e) {
      return null;
    }
  }

  Future<String?> getToken() async {
    return _storage.read(key: _tokenKey);
  }

  Future<Map<String, dynamic>?> getUser() async {
    final userStr = await _storage.read(key: _userKey);
    if (userStr == null) return null;
    return jsonDecode(userStr);
  }

  Future<void> logout() async {
    await _storage.deleteAll();
  }
}
