import { IsString, IsEnum, IsOptional, IsBoolean } from 'class-validator';

export enum TransportType {
  AMBULANCE_ASSIS  = 'AMBULANCE_ASSIS',
  AMBULANCE_COUCHE = 'AMBULANCE_COUCHE',
  VSL              = 'VSL',
  TAXI             = 'TAXI',
}

export enum Priority {
  P1 = 'P1',
  P2 = 'P2',
  P3 = 'P3',
  P4 = 'P4',
}

export class DispatchRequestDto {
  @IsString()
  missionId: string;

  @IsString()
  pickupAddress: string;

  @IsString()
  dropoffAddress: string;

  @IsEnum(TransportType)
  type: TransportType;

  @IsEnum(Priority)
  @IsOptional()
  priority?: Priority;

  @IsBoolean()
  @IsOptional()
  isUrgent?: boolean;

  @IsString()
  @IsOptional()
  patientWeight?: string;

  @IsBoolean()
  @IsOptional()
  requiresOxygen?: boolean;

  @IsBoolean()
  @IsOptional()
  requiresStretcher?: boolean;
}
