/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntitiesHandlerController } from './controller/entitieshandler/entitieshandler.controller';
import { DatabaseModule } from './database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [AppController, EntitiesHandlerController],
  providers: [AppService],
})
export class AppModule {}
