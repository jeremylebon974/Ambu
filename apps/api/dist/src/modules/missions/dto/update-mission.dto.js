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
exports.UpdateMissionDto = exports.MissionStatus = void 0;
const class_validator_1 = require("class-validator");
var MissionStatus;
(function (MissionStatus) {
    MissionStatus["PENDING"] = "PENDING";
    MissionStatus["ASSIGNED"] = "ASSIGNED";
    MissionStatus["EN_ROUTE_PICKUP"] = "EN_ROUTE_PICKUP";
    MissionStatus["AT_PICKUP"] = "AT_PICKUP";
    MissionStatus["EN_ROUTE_DROPOFF"] = "EN_ROUTE_DROPOFF";
    MissionStatus["AT_DROPOFF"] = "AT_DROPOFF";
    MissionStatus["COMPLETED"] = "COMPLETED";
    MissionStatus["VALIDATED"] = "VALIDATED";
    MissionStatus["CANCELLED"] = "CANCELLED";
    MissionStatus["ANOMALY"] = "ANOMALY";
})(MissionStatus || (exports.MissionStatus = MissionStatus = {}));
class UpdateMissionDto {
}
exports.UpdateMissionDto = UpdateMissionDto;
__decorate([
    (0, class_validator_1.IsEnum)(MissionStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateMissionDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateMissionDto.prototype, "actualPickup", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateMissionDto.prototype, "actualDropoff", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateMissionDto.prototype, "patientSignature", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateMissionDto.prototype, "isUrgent", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateMissionDto.prototype, "cancelReason", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateMissionDto.prototype, "notes", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateMissionDto.prototype, "actualKm", void 0);
//# sourceMappingURL=update-mission.dto.js.map