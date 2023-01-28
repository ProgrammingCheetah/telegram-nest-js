import { IsArray, IsNumber, IsString } from 'class-validator';
import { Optional } from '@nestjs/common';

export class GetWithTagsDto {
  @IsArray()
  @IsString({ each: true })
  lookup: string[] = [];

  @IsArray()
  @IsString({ each: true })
  forbidden: string[] = [];

  @Optional()
  @IsNumber()
  amount: number = 320;
}
