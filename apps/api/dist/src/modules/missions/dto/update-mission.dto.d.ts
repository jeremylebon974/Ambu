import { MissionStatus } from '../../../../generated/prisma/client';
export { MissionStatus };
export declare class UpdateMissionDto {
    type?: string;
    status?: MissionStatus;
    isUrgent?: boolean;
    originAddress?: string;
    originLat?: number;
    originLng?: number;
    destAddress?: string;
    destLat?: number;
    destLng?: number;
    scheduledAt?: string;
    notes?: string;
    actualPickup?: string;
    actualDropoff?: string;
}
