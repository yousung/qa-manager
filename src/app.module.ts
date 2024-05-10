import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UtilsModule } from './utils/utils.module';

@Module({
  imports: [UsersModule, UtilsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
