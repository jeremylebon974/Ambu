import { IsString, IsEnum, IsBoolean, IsOptional, IsDateString, IsNumber } from 'class-validator';
import { MissionStatus } from '../../../../generated/prisma/client';

export { MissionStatus };

export class UpdateMissionDto {
  @IsString()
  @IsOptional()
  type?: string;

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

  @IsString()
  @IsOptional()
  actualPickup?: string;

  @IsString()
  @IsOptional()
  actualDropoff?: string;
}