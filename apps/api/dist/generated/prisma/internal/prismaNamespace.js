"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.NullsOrder = exports.JsonNullValueFilter = exports.QueryMode = exports.NullableJsonNullValueInput = exports.SortOrder = exports.AuditLogScalarFieldEnum = exports.NotificationScalarFieldEnum = exports.MutuelleScalarFieldEnum = exports.InvoiceLineScalarFieldEnum = exports.InvoiceScalarFieldEnum = exports.PrescriptionScalarFieldEnum = exports.DocumentScalarFieldEnum = exports.GpsTrackScalarFieldEnum = exports.MissionEventScalarFieldEnum = exports.MissionScalarFieldEnum = exports.CrewMemberScalarFieldEnum = exports.CrewScalarFieldEnum = exports.VehicleScalarFieldEnum = exports.PatientScalarFieldEnum = exports.UserScalarFieldEnum = exports.OrganizationScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.8.0",
    engine: "3c6e192761c0362d496ed980de936e2f3cebcd3a"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Organization: 'Organization',
    User: 'User',
    Patient: 'Patient',
    Vehicle: 'Vehicle',
    Crew: 'Crew',
    CrewMember: 'CrewMember',
    Mission: 'Mission',
    MissionEvent: 'MissionEvent',
    GpsTrack: 'GpsTrack',
    Document: 'Document',
    Prescription: 'Prescription',
    Invoice: 'Invoice',
    InvoiceLine: 'InvoiceLine',
    Mutuelle: 'Mutuelle',
    Notification: 'Notification',
    AuditLog: 'AuditLog'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.OrganizationScalarFieldEnum = {
    id: 'id',
    name: 'name',
    siret: 'siret',
    address: 'address',
    phone: 'phone',
    email: 'email',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metadata: 'metadata'
};
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    isActive: 'isActive',
    refreshToken: 'refreshToken',
    lastLoginAt: 'lastLoginAt',
    phone: 'phone',
    organizationId: 'organizationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PatientScalarFieldEnum = {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    birthDate: 'birthDate',
    gender: 'gender',
    address: 'address',
    phone: 'phone',
    email: 'email',
    socialNumber: 'socialNumber',
    isActive: 'isActive',
    organizationId: 'organizationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.VehicleScalarFieldEnum = {
    id: 'id',
    plate: 'plate',
    model: 'model',
    type: 'type',
    status: 'status',
    isActive: 'isActive',
    organizationId: 'organizationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.CrewScalarFieldEnum = {
    id: 'id',
    name: 'name',
    vehicleId: 'vehicleId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.CrewMemberScalarFieldEnum = {
    id: 'id',
    crewId: 'crewId',
    userId: 'userId',
    role: 'role',
    createdAt: 'createdAt'
};
exports.MissionScalarFieldEnum = {
    id: 'id',
    status: 'status',
    priority: 'priority',
    address: 'address',
    notes: 'notes',
    scheduledAt: 'scheduledAt',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    patientId: 'patientId',
    crewId: 'crewId',
    organizationId: 'organizationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.MissionEventScalarFieldEnum = {
    id: 'id',
    missionId: 'missionId',
    type: 'type',
    data: 'data',
    createdAt: 'createdAt'
};
exports.GpsTrackScalarFieldEnum = {
    id: 'id',
    vehicleId: 'vehicleId',
    latitude: 'latitude',
    longitude: 'longitude',
    speed: 'speed',
    heading: 'heading',
    accuracy: 'accuracy',
    timestamp: 'timestamp'
};
exports.DocumentScalarFieldEnum = {
    id: 'id',
    filename: 'filename',
    url: 'url',
    mimeType: 'mimeType',
    sizeBytes: 'sizeBytes',
    type: 'type',
    isEncrypted: 'isEncrypted',
    patientId: 'patientId',
    missionId: 'missionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PrescriptionScalarFieldEnum = {
    id: 'id',
    medication: 'medication',
    dosage: 'dosage',
    frequency: 'frequency',
    startDate: 'startDate',
    endDate: 'endDate',
    doctorName: 'doctorName',
    notes: 'notes',
    isActive: 'isActive',
    patientId: 'patientId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.InvoiceScalarFieldEnum = {
    id: 'id',
    number: 'number',
    status: 'status',
    amount: 'amount',
    vatRate: 'vatRate',
    dueDate: 'dueDate',
    paidAt: 'paidAt',
    notes: 'notes',
    missionId: 'missionId',
    patientId: 'patientId',
    organizationId: 'organizationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.InvoiceLineScalarFieldEnum = {
    id: 'id',
    description: 'description',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    total: 'total',
    invoiceId: 'invoiceId',
    createdAt: 'createdAt'
};
exports.MutuelleScalarFieldEnum = {
    id: 'id',
    name: 'name',
    number: 'number',
    startDate: 'startDate',
    endDate: 'endDate',
    isActive: 'isActive',
    patientId: 'patientId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.NotificationScalarFieldEnum = {
    id: 'id',
    type: 'type',
    title: 'title',
    message: 'message',
    isRead: 'isRead',
    data: 'data',
    userId: 'userId',
    organizationId: 'organizationId',
    createdAt: 'createdAt'
};
exports.AuditLogScalarFieldEnum = {
    id: 'id',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    oldData: 'oldData',
    newData: 'newData',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId',
    organizationId: 'organizationId',
    createdAt: 'createdAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map