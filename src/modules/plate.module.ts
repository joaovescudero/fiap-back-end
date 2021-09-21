import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plate } from '../entites/plate.entity';
import { PlatesService } from '../services/plate.service';
import { PlatesController } from '../controllers/plate.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Plate])],
  providers: [PlatesService],
  controllers: [PlatesController],
})
export class PlateModule {}
