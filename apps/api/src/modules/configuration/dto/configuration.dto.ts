import { IsString, IsNumber, IsBoolean, IsArray, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CodePlanningDto {
  @IsString()
  code: string;

  @IsString()
  label: string;

  @IsString()
  couleur: string;

  @IsString()
  @IsOptional()
  description?: string;
}

export class HoraireDto {
  @IsString()
  nom: string;

  @IsString()
  debut: string;

  @IsString()
  fin: string;

  @IsBoolean()
  nuit: boolean;

  @IsNumber()
  dureeHeures: number;

  @IsString()
  @IsOptional()
  description?: string;
}

export class VehiculeConfigDto {
  @IsString()
  numero: string;

  @IsString()
  type: string;

  @IsString()
  diplomeRequis: string;

  @IsString()
  @IsOptional()
  equipements?: string;

  @IsBoolean()
  actif: boolean;
}

export class ConfigLegaleDto {
  @IsNumber()
  reposQuotidienMin: number;

  @IsNumber()
  reposHebdoMin: number;

  @IsNumber()
  amplitudeMax: number;

  @IsNumber()
  heuresMaxSemaine: number;

  @IsNumber()
  heuresMinSemaine: number;

  @IsNumber()
  pauseMinimale: number;

  @IsNumber()
  majorationNuit: number;

  @IsNumber()
  majorationDimanche: number;

  @IsNumber()
  majorationFerie: number;
}

export class SaveConfigurationDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodePlanningDto)
  @IsOptional()
  codes?: CodePlanningDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HoraireDto)
  @IsOptional()
  horaires?: HoraireDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => VehiculeConfigDto)
  @IsOptional()
  vehicules?: VehiculeConfigDto[];

  @IsOptional()
  legal?: ConfigLegaleDto;
}
