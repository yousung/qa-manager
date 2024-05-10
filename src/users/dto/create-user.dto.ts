import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length, Max, Min } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @Length(2, 15, {
    message: '이름은 2글자 이상, 15글자 이하로 작성하여 주시기 바랍니다.',
  })
  name: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @Length(4, 20, {
    message: '비밀번호는 4글자 이상, 20글자 이하로 작성하여 주시기 바랍니다.',
  })
  password: string;
}
