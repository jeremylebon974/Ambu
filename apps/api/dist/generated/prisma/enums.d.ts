export declare const UserRole: {
    readonly SUPER_ADMIN: "SUPER_ADMIN";
    readonly ADMIN: "ADMIN";
    readonly REGULATEUR: "REGULATEUR";
    readonly AMBULANCIER: "AMBULANCIER";
    readonly COMPTABLE: "COMPTABLE";
    readonly PATIENT: "PATIENT";
    readonly CLINIQUE: "CLINIQUE";
    readonly PARTENAIRE: "PARTENAIRE";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const MissionStatus: {
    readonly PENDING: "PENDING";
    readonly ASSIGNED: "ASSIGNED";
    readonly EN_ROUTE: "EN_ROUTE";
    readonly ON_SCENE: "ON_SCENE";
    readonly TRANSPORTING: "TRANSPORTING";
    readonly COMPLETED: "COMPLETED";
    readonly VALIDATED: "VALIDATED";
    readonly CANCELLED: "CANCELLED";
};
export type MissionStatus = (typeof MissionStatus)[keyof typeof MissionStatus];
export declare const VehicleStatus: {
    readonly AVAILABLE: "AVAILABLE";
    readonly ON_MISSION: "ON_MISSION";
    readonly MAINTENANCE: "MAINTENANCE";
    readonly OUT_OF_SERVICE: "OUT_OF_SERVICE";
};
export type VehicleStatus = (typeof VehicleStatus)[keyof typeof VehicleStatus];
export declare const DocumentType: {
    readonly MEDICAL_REPORT: "MEDICAL_REPORT";
    readonly PRESCRIPTION: "PRESCRIPTION";
    readonly INVOICE: "INVOICE";
    readonly IDENTITY: "IDENTITY";
    readonly CONSENT: "CONSENT";
    readonly OTHER: "OTHER";
};
export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType];
export declare const InvoiceStatus: {
    readonly DRAFT: "DRAFT";
    readonly PENDING: "PENDING";
    readonly PAID: "PAID";
    readonly CANCELLED: "CANCELLED";
};
export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus];
export declare const NotificationType: {
    readonly MISSION_ASSIGNED: "MISSION_ASSIGNED";
    readonly MISSION_STATUS_CHANGED: "MISSION_STATUS_CHANGED";
    readonly DOCUMENT_SHARED: "DOCUMENT_SHARED";
    readonly PAYMENT_RECEIVED: "PAYMENT_RECEIVED";
    readonly SYSTEM: "SYSTEM";
};
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
