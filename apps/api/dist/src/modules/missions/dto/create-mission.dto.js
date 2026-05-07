"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMissionDto = exports.Priority = exports.TransportType = void 0;
const class_validator_1 = require("class-validator");
var TransportType;
(function (TransportType) {
    TransportType["AMBULANCE_ASSIS"] = "AMBULANCE_ASSIS";
    TransportType["AMBULANCE_COUCHE"] = "AMBULANCE_COUCHE";
    TransportType["VSL"] = "VSL";
    TransportType["TAXI"] = "TAXI";
})(TransportType || (exports.TransportType = TransportType = {}));
var Priority;
(function (Priority) {
    Priority["P1"] = "P1";
    Priority["P2"] = "P2";
    Priority["P3"] = "P3";
    Priority["P4"] = "P4";
})(Priority || (exports.Priority = Priority = {}));
class CreateMissionDto {
}
exports.CreateMissionDto = CreateMissionDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMissionDto.prototype, "patientId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(TransportType),
    __metadata("design:type", String)
], CreateMissionDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(Priority),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMissionDto.prototype, "priority", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateMissionDto.prototype, "isUrgent", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMissionDto.prototype, "pickupAddress", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMissionDto.prototype, "dropoffAddress", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateMissionDto.prototype, "scheduledPickup", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMissionDto.prototype, "scheduledDropoff", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMissionDto.prototype, "transportReason", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMissionDto.prototype, "ngapCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMissionDto.prototype, "prescriberName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMissionDto.prototype, "notes", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateMissionDto.prototype, "isReturn", void 0);
//# sourceMappingURL=create-mission.dto.js.map