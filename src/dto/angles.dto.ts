import { IsNumber } from 'class-validator';

export class AnglesDto {
  @IsNumber()
  shoulder: number;

  @IsNumber()
  elbow: number;

  @IsNumber()
  wrist: number;
}
