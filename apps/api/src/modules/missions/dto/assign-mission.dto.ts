import { IsString } from 'class-validator';

export class AssignMissionDto {
  @IsString()
  crewId: string;

  @IsString()
  vehicleId: string;
}
