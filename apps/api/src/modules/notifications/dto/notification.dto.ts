import { IsString, IsEnum, IsOptional, IsPhoneNumber } from 'class-validator';

export enum NotificationType {
  MISSION_ASSIGNED    = 'MISSION_ASSIGNED',
  MISSION_CONFIRMED   = 'MISSION_CONFIRMED',
  MISSION_REFUSED     = 'MISSION_REFUSED',
  MISSION_CANCELLED   = 'MISSION_CANCELLED',
  URGENT_ALERT        = 'URGENT_ALERT',
  REMINDER            = 'REMINDER',
}

export enum NotificationChannel {
  SMS   = 'SMS',
  CALL  = 'CALL',
  PUSH  = 'PUSH',
  EMAIL = 'EMAIL',
}

export class SendSmsDto {
  @IsString()
  to: string;

  @IsString()
  message: string;

  @IsString()
  @IsOptional()
  missionId?: string;
}

export class SendCallDto {
  @IsString()
  to: string;

  @IsString()
  message: string;

  @IsString()
  @IsOptional()
  missionId?: string;
}

export class MissionConfirmationDto {
  @IsString()
  missionId: string;

  @IsString()
  ambulancierId: string;

  @IsString()
  phoneNumber: string;
}
