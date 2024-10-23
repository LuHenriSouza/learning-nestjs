import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TaskModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    AuthModule,
    TaskModule,
    DbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
