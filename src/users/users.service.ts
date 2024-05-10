import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Like, Repository } from 'typeorm';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';
import { PaginationDto } from '../utils/dto/pagination.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  index(paginationDto: PaginationDto): Promise<Pagination<UserEntity>> {
    const { page, limit, search } = paginationDto;
    const query = this.userRepository.createQueryBuilder();
    if (search) {
      query
        .where({
          name: Like(`%${search}%`),
        })
        .orWhere({
          email: Like(`%${search}%`),
        });
    }
    return paginate<UserEntity>(query, {
      page,
      limit,
    });
  }

  store(createUserDto: CreateUserDto) {
    const { name, email, password } = createUserDto;
    return this.userRepository.save({
      name,
      email,
      password,
    });
  }
}
