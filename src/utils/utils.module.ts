import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as process from 'node:process';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { UtilsService } from './utils.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      namingStrategy: new SnakeNamingStrategy(),
      type: 'sqlite',
      database: 'database.sqlite',
      autoLoadEntities: true,
      logging: process?.env?.ENV !== 'production',
      synchronize: true,
      dropSchema: true,
    }),
  ],
  controllers: [],
  providers: [UtilsService],
  exports: [UtilsService],
})
export class UtilsModule {}
