import { Module } from '@nestjs/common';
import { RootController } from './controllers/root.controller';
import { RootService } from './services/root.service';

@Module({
  imports: [],
  controllers: [RootController],
  providers: [RootService],
})
export class RootModule {}
