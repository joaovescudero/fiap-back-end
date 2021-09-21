import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserLocationHistory } from '../entites/userLocationHistory.entity';
import { UserLocationHistoryService } from '../services/userLocationHistory.service';
import { UserLocationHistoryController } from '../controllers/userLocationHistory.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserLocationHistory])],
  providers: [UserLocationHistoryService],
  controllers: [UserLocationHistoryController],
})
export class UserLocationHistoryModule {}
