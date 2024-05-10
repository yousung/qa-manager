import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PaginationDto } from '../utils/dto/pagination.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
@ApiTags('auth')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @ApiOperation({
    summary: '사용자 리스트',
    description: '등록된 사용자를 페이지네이트로 표시한다.',
  })
  index(
    @Query() paginationDto: PaginationDto,
  ): Promise<Pagination<UserEntity>> {
    return this.userService.index(paginationDto);
  }

  @Get(':id')
  show() {}

  @Post()
  @ApiOperation({
    summary: '사용자 등록',
    description: '이메일과 이름을 입력하여 사용자를 등록한다.',
  })
  store(@Body() createUserDto: CreateUserDto) {
    return this.userService.store(createUserDto);
  }

  @Patch(':id')
  update() {}

  @Delete(':id')
  destroy() {}
}
