import 'dart:convert';
import 'package:http/http.dart' as http;

class MissionService {
  static const String _baseUrl = 'http://10.0.2.2:3001';

  Future<List<Map<String, dynamic>>> getMyMissions(String token) async {
    try {
      final response = await http.get(
        Uri.parse('$_baseUrl/pda/missions'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $token',
        },
      );

      if (response.statusCode == 200) {
        final List<dynamic> data = jsonDecode(response.body);
        return data.cast<Map<String, dynamic>>();
      }
      return [];
    } catch (e) {
      return [];
    }
  }

  Future<bool> updateStatus({
    required String token,
    required String missionId,
    required String status,
    required double lat,
    required double lng,
  }) async {
    try {
      final response = await http.patch(
        Uri.parse('$_baseUrl/pda/mission/status'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $token',
        },
        body: jsonEncode({
          'missionId': missionId,
          'status': status,
          'lat': lat.toString(),
          'lng': lng.toString(),
          'speed': '0',
        }),
      );
      return response.statusCode == 200;
    } catch (e) {
      return false;
    }
  }

  Future<bool> sendGps({
    required String token,
    required String vehicleId,
    required double lat,
    required double lng,
    required double speed,
    required double heading,
  }) async {
    try {
      final response = await http.post(
        Uri.parse('$_baseUrl/pda/gps'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $token',
        },
        body: jsonEncode({
          'vehicleId': vehicleId,
          'lat': lat.toString(),
          'lng': lng.toString(),
          'speed': speed.toString(),
          'heading': heading.toString(),
        }),
      );
      return response.statusCode == 200 || response.statusCode == 201;
    } catch (e) {
      return false;
    }
  }

  Future<bool> reportIncident({
    required String token,
    required String missionId,
    required String type,
    required String description,
    required double lat,
    required double lng,
  }) async {
    try {
      final response = await http.post(
        Uri.parse('$_baseUrl/pda/incident'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $token',
        },
        body: jsonEncode({
          'missionId': missionId,
          'type': type,
          'description': description,
          'lat': lat.toString(),
          'lng': lng.toString(),
        }),
      );
      return response.statusCode == 200 || response.statusCode == 201;
    } catch (e) {
      return false;
    }
  }
}
