import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
export declare class MissionsGateway implements OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    private readonly logger;
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
    emitMissionUpdated(organizationId: string, mission: any): void;
    emitMissionCreated(organizationId: string, mission: any): void;
    emitVehiclePosition(organizationId: string, vehicleId: string, position: {
        lat: number;
        lng: number;
        speed?: number;
    }): void;
    emitAlert(organizationId: string, alert: any): void;
    handleStatusUpdate(client: Socket, data: {
        missionId: string;
        status: string;
        lat?: number;
        lng?: number;
    }): void;
    handleGpsUpdate(client: Socket, data: {
        vehicleId: string;
        lat: number;
        lng: number;
        speed?: number;
    }): void;
}
