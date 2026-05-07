import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  ConnectedSocket,
  MessageBody,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({
  cors: { origin: '*', credentials: true },
  namespace: '/dispatch',
})
export class MissionsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private readonly logger = new Logger(MissionsGateway.name);

  handleConnection(client: Socket) {
    const orgId = client.handshake.query.organizationId as string;
    if (orgId) {
      client.join(`org:${orgId}`);
      this.logger.log(`Client connecté : ${client.id} → org:${orgId}`);
    }
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client déconnecté : ${client.id}`);
  }

  emitMissionUpdated(organizationId: string, mission: any) {
    this.server.to(`org:${organizationId}`).emit('mission:updated', mission);
  }

  emitMissionCreated(organizationId: string, mission: any) {
    this.server.to(`org:${organizationId}`).emit('mission:created', mission);
  }

  emitVehiclePosition(organizationId: string, vehicleId: string, position: { lat: number; lng: number; speed?: number }) {
    this.server.to(`org:${organizationId}`).emit('vehicle:position', {
      vehicleId,
      ...position,
      timestamp: new Date(),
    });
  }

  emitAlert(organizationId: string, alert: any) {
    this.server.to(`org:${organizationId}`).emit('dispatch:alert', alert);
  }

  @SubscribeMessage('mission:status_update')
  handleStatusUpdate(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { missionId: string; status: string; lat?: number; lng?: number },
  ) {
    const orgId = client.handshake.query.organizationId as string;
    this.server.to(`org:${orgId}`).emit('mission:status_updated', data);
  }

  @SubscribeMessage('vehicle:gps')
  handleGpsUpdate(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { vehicleId: string; lat: number; lng: number; speed?: number },
  ) {
    const orgId = client.handshake.query.organizationId as string;
    this.emitVehiclePosition(orgId, data.vehicleId, data);
  }
}
