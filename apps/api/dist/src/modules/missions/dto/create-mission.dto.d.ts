export declare enum TransportType {
    AMBULANCE_ASSIS = "AMBULANCE_ASSIS",
    AMBULANCE_COUCHE = "AMBULANCE_COUCHE",
    VSL = "VSL",
    TAXI = "TAXI"
}
export declare enum Priority {
    P1 = "P1",
    P2 = "P2",
    P3 = "P3",
    P4 = "P4"
}
export declare class CreateMissionDto {
    patientId: string;
    type: TransportType;
    priority?: Priority;
    isUrgent?: boolean;
    pickupAddress: string;
    dropoffAddress: string;
    scheduledPickup: string;
    scheduledDropoff?: string;
    transportReason?: string;
    ngapCode?: string;
    prescriberName?: string;
    notes?: string;
    isReturn?: boolean;
}
