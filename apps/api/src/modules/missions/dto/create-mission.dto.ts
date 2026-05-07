import { IsString, IsOptional, IsBoolean, IsDateString, IsEnum } from 'class-validator';

export enum TransportType {
  AMBULANCE_ASSIS = 'AMBULANCE_ASSIS',
  AMBULANCE_COUCHE = 'AMBULANCE_COUCHE',
  VSL = 'VSL',
  TAXI = 'TAXI',
}

export enum Priority {
  P1 = 'P1',
  P2 = 'P2',
  P3 = 'P3',
  P4 = 'P4',
}

export class CreateMissionDto {
  @IsString()
  patientId: string;

  @IsEnum(TransportType)
  type: TransportType;

  @IsEnum(Priority)
  @IsOptional()
  priority?: Priority;

  @IsBoolean()
  @IsOptional()
  isUrgent?: boolean;

  @IsString()
  pickupAddress: string;

  @IsString()
  dropoffAddress: string;

  @IsDateString()
  scheduledPickup: string;

  @IsDateString()
  @IsOptional()
  scheduledDropoff?: string;

  @IsString()
  @IsOptional()
  transportReason?: string;

  @IsString()
  @IsOptional()
  ngapCode?: string;

  @IsString()
  @IsOptional()
  prescriberName?: string;

  @IsString()
  @IsOptional()
  notes?: string;

  @IsBoolean()
  @IsOptional()
  isReturn?: boolean;
}
