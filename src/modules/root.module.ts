import { Module } from '@nestjs/common';
import { RootService } from '../services/root.service';
import { RootController } from '../controllers/root.controller';

@Module({
  providers: [RootService],
  controllers: [RootController],
})
export class RootModule {}
