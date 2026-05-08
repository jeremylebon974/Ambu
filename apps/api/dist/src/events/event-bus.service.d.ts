import { Queue } from 'bullmq';
export declare enum SystemEvent {
    MISSION_CREATED = "mission.created",
    MISSION_ASSIGNED = "mission.assigned",
    MISSION_VALIDATED = "mission.validated",
    MISSION_CANCELLED = "mission.cancelled",
    ANOMALY_DETECTED = "anomaly.detected",
    INVOICE_PREPARED = "invoice.prepared",
    INVOICE_READY = "invoice.ready",
    CPAM_READY = "cpam.ready",
    GPS_UPDATE = "vehicle.gps_update"
}
export interface EventPayload {
    event: SystemEvent;
    organizationId: string;
    data: Record<string, any>;
    timestamp: Date;
}
export declare class EventBusService {
    private syncQueue;
    private dossierQueue;
    private complianceQueue;
    private invoiceQueue;
    private notifQueue;
    private readonly logger;
    constructor(syncQueue: Queue, dossierQueue: Queue, complianceQueue: Queue, invoiceQueue: Queue, notifQueue: Queue);
    emit(event: SystemEvent, organizationId: string, data: Record<string, any>): Promise<void>;
    private routeToQueues;
}
