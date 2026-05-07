"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationType = exports.InvoiceStatus = exports.DocumentType = exports.VehicleStatus = exports.MissionStatus = exports.UserRole = void 0;
exports.UserRole = {
    SUPER_ADMIN: 'SUPER_ADMIN',
    ADMIN: 'ADMIN',
    REGULATEUR: 'REGULATEUR',
    AMBULANCIER: 'AMBULANCIER',
    COMPTABLE: 'COMPTABLE',
    PATIENT: 'PATIENT',
    CLINIQUE: 'CLINIQUE',
    PARTENAIRE: 'PARTENAIRE'
};
exports.MissionStatus = {
    PENDING: 'PENDING',
    ASSIGNED: 'ASSIGNED',
    EN_ROUTE: 'EN_ROUTE',
    ON_SCENE: 'ON_SCENE',
    TRANSPORTING: 'TRANSPORTING',
    COMPLETED: 'COMPLETED',
    VALIDATED: 'VALIDATED',
    CANCELLED: 'CANCELLED'
};
exports.VehicleStatus = {
    AVAILABLE: 'AVAILABLE',
    ON_MISSION: 'ON_MISSION',
    MAINTENANCE: 'MAINTENANCE',
    OUT_OF_SERVICE: 'OUT_OF_SERVICE'
};
exports.DocumentType = {
    MEDICAL_REPORT: 'MEDICAL_REPORT',
    PRESCRIPTION: 'PRESCRIPTION',
    INVOICE: 'INVOICE',
    IDENTITY: 'IDENTITY',
    CONSENT: 'CONSENT',
    OTHER: 'OTHER'
};
exports.InvoiceStatus = {
    DRAFT: 'DRAFT',
    PENDING: 'PENDING',
    PAID: 'PAID',
    CANCELLED: 'CANCELLED'
};
exports.NotificationType = {
    MISSION_ASSIGNED: 'MISSION_ASSIGNED',
    MISSION_STATUS_CHANGED: 'MISSION_STATUS_CHANGED',
    DOCUMENT_SHARED: 'DOCUMENT_SHARED',
    PAYMENT_RECEIVED: 'PAYMENT_RECEIVED',
    SYSTEM: 'SYSTEM'
};
//# sourceMappingURL=enums.js.map