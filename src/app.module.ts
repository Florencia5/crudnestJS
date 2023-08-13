import { Module } from '@nestjs/common';
import { DogsController } from './app.controller';

@Module({
  imports: [],
  controllers: [DogsController],
  providers: [],
})
export class AppModule {}

