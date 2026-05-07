import { IsString, IsOptional, IsBoolean, IsDateString, IsEnum } from 'class-validator';

export enum MissionStatus {
  PENDING = 'PENDING',
  ASSIGNED = 'ASSIGNED',
  EN_ROUTE_PICKUP = 'EN_ROUTE_PICKUP',
  AT_PICKUP = 'AT_PICKUP',
  EN_ROUTE_DROPOFF = 'EN_ROUTE_DROPOFF',
  AT_DROPOFF = 'AT_DROPOFF',
  COMPLETED = 'COMPLETED',
  VALIDATED = 'VALIDATED',
  CANCELLED = 'CANCELLED',
  ANOMALY = 'ANOMALY',
}

export class UpdateMissionDto {
  @IsEnum(MissionStatus)
  @IsOptional()
  status?: MissionStatus;

  @IsDateString()
  @IsOptional()
  actualPickup?: string;

  @IsDateString()
  @IsOptional()
  actualDropoff?: string;

  @IsString()
  @IsOptional()
  patientSignature?: string;

  @IsBoolean()
  @IsOptional()
  isUrgent?: boolean;

  @IsString()
  @IsOptional()
  cancelReason?: string;

  @IsString()
  @IsOptional()
  notes?: string;

  @IsOptional()
  actualKm?: number;
}
