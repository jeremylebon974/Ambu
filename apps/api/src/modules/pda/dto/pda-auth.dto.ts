import { IsString, IsEmail, MinLength } from 'class-validator';

export class PdaLoginDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  deviceId: string;

  @IsString()
  vehicleId: string;
}

export class PdaStatusDto {
  @IsString()
  missionId: string;

  @IsString()
  status: string;

  @IsString()
  lat: string;

  @IsString()
  lng: string;

  @IsString()
  speed: string;
}

export class PdaGpsDto {
  @IsString()
  lat: string;

  @IsString()
  lng: string;

  @IsString()
  speed: string;

  @IsString()
  heading: string;

  @IsString()
  vehicleId: string;
}

export class PdaSignatureDto {
  @IsString()
  missionId: string;

  @IsString()
  signatureData: string;

  @IsString()
  signedBy: string;

  @IsString()
  lat: string;

  @IsString()
  lng: string;
}

import { IsOptional } from 'class-validator';

export class PdaIncidentDto {
  @IsOptional()
  @IsString()
  missionId?: string;

  @IsString()
  type: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  gravite?: string;

  @IsOptional()
  @IsString()
  photoUrl?: string;

  @IsOptional()
  @IsString()
  vehiclePlate?: string;

  @IsOptional()
  lat?: string | number;

  @IsOptional()
  lng?: string | number;

  @IsOptional()
  latitude?: string | number;

  @IsOptional()
  longitude?: string | number;
}
