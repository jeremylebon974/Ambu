import { IsString } from 'class-validator';

export class AssignMissionDto {
  @IsString()
  vehicleId: string;

  @IsString()
  crewId: string;
}