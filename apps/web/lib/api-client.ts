const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

interface RequestOptions {
  method?: string;
  body?: any;
  token?: string;
}

async function request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { method = 'GET', body, token } = options;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Erreur réseau' }));
    throw new Error(error.message || 'Erreur API');
  }

  return response.json();
}

export const api = {
  // Auth
  login: (email: string, password: string) =>
    request<{ user: any; accessToken: string; refreshToken: string }>('/auth/login', {
      method: 'POST',
      body: { email, password },
    }),

  getMe: (token: string) =>
    request<any>('/auth/me', { token }),

  logout: (token: string) =>
    request<any>('/auth/logout', { method: 'POST', token }),

  // Missions
  getMissions: (token: string, status?: string) =>
    request<any[]>(`/missions${status ? `?status=${status}` : ''}`, { token }),

  getMission: (token: string, id: string) =>
    request<any>(`/missions/${id}`, { token }),

  createMission: (token: string, data: any) =>
    request<any>('/missions', { method: 'POST', body: data, token }),

  assignMission: (token: string, id: string, data: any) =>
    request<any>(`/missions/${id}/assign`, { method: 'PATCH', body: data, token }),

  updateMissionStatus: (token: string, id: string, data: any) =>
    request<any>(`/missions/${id}/status`, { method: 'PATCH', body: data, token }),

  getMissionEvents: (token: string, id: string) =>
    request<any[]>(`/missions/${id}/events`, { token }),

  // Dispatch
  getDispatchVehicles: (token: string) =>
    request<any[]>('/dispatch/vehicles', { token }),

  getDispatchStats: (token: string) =>
    request<any>('/dispatch/stats', { token }),

  triggerDispatch: (token: string, data: any) =>
    request<any>('/dispatch', { method: 'POST', body: data, token }),

  triggerAIDispatch: (token: string, data: any) =>
    request<any>('/dispatch/ai', { method: 'POST', body: data, token }),
};
