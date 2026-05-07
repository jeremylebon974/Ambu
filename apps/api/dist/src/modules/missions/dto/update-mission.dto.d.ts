export declare enum MissionStatus {
    PENDING = "PENDING",
    ASSIGNED = "ASSIGNED",
    EN_ROUTE_PICKUP = "EN_ROUTE_PICKUP",
    AT_PICKUP = "AT_PICKUP",
    EN_ROUTE_DROPOFF = "EN_ROUTE_DROPOFF",
    AT_DROPOFF = "AT_DROPOFF",
    COMPLETED = "COMPLETED",
    VALIDATED = "VALIDATED",
    CANCELLED = "CANCELLED",
    ANOMALY = "ANOMALY"
}
export declare class UpdateMissionDto {
    status?: MissionStatus;
    actualPickup?: string;
    actualDropoff?: string;
    patientSignature?: string;
    isUrgent?: boolean;
    cancelReason?: string;
    notes?: string;
    actualKm?: number;
}
