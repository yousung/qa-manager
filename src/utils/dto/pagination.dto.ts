import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

export class PaginationDto {
  @ApiProperty({
    description: '표시할 페이지',
    required: false,
    default: '1',
  })
  @IsNumber()
  @Min(1, { message: '1 이상의 값을 입력해야 합니다.' })
  page: number = 1;

  @ApiProperty({
    description: '한번에 표시할 데이터양',
    required: false,
    default: '15',
  })
  @IsNumber()
  @Min(1, { message: '1 이상의 값을 입력해야합니다.' })
  @Max(100, { message: '100을 초과할 수 없습니다.' })
  limit: number = 15;

  @ApiProperty({
    description: '한번에 표시할 데이터양',
    required: false,
  })
  @IsString()
  @IsOptional()
  search: string;
}
