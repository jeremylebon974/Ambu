import { IsString, IsEnum, IsBoolean, IsOptional, IsDateString, IsNumber } from 'class-validator';
import { MissionStatus, MissionType } from '../../../generated/prisma';

export class UpdateMissionDto {
  @IsEnum(MissionType)
  @IsOptional()
  type?: MissionType;

  @IsEnum(MissionStatus)
  @IsOptional()
  status?: MissionStatus;

  @IsBoolean()
  @IsOptional()
  isUrgent?: boolean;

  @IsString()
  @IsOptional()
  originAddress?: string;

  @IsNumber()
  @IsOptional()
  originLat?: number;

  @IsNumber()
  @IsOptional()
  originLng?: number;

  @IsString()
  @IsOptional()
  destAddress?: string;

  @IsNumber()
  @IsOptional()
  destLat?: number;

  @IsNumber()
  @IsOptional()
  destLng?: number;

  @IsDateString()
  @IsOptional()
  scheduledAt?: string;

  @IsString()
  @IsOptional()
  notes?: string;
}