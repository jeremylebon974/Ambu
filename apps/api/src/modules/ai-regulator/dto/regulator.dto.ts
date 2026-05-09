import { IsString, IsOptional, IsEnum } from 'class-validator';

export enum RequestSource {
  SAMU       = 'SAMU',
  TELEPHONE  = 'TELEPHONE',
  APPLICATION = 'APPLICATION',
  RECURRENCE = 'RECURRENCE',
}

export enum UrgencyLevel {
  IMMEDIATE = 'IMMEDIATE',
  URGENT    = 'URGENT',
  NORMAL    = 'NORMAL',
  PLANIFIED = 'PLANIFIED',
}

export class RegulatorRequestDto {
  @IsString()
  rawRequest: string;

  @IsEnum(RequestSource)
  @IsOptional()
  source?: RequestSource;

  @IsString()
  @IsOptional()
  callerPhone?: string;

  @IsString()
  @IsOptional()
  samuRef?: string;

  @IsString()
  @IsOptional()
  patientName?: string;

  @IsString()
  @IsOptional()
  patientAddress?: string;

  @IsString()
  @IsOptional()
  destination?: string;
}

export class RegulatorDecision {
  urgencyLevel: UrgencyLevel;
  transportType: string;
  priority: string;
  patientName: string;
  patientAddress: string;
  destination: string;
  medicalNeeds: string[];
  estimatedDuration: number;
  requiresOxygen: boolean;
  requiresStretcher: boolean;
  isUrgent: boolean;
  ngapCode: string;
  reasoning: string;
  confidence: number;
  autoDispatch: boolean;
}
