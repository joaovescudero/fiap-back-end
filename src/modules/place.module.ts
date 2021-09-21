import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlacesController } from '../controllers/place.controller';
import { PlacesService } from '../services/place.service';
import { Place } from 'src/entites/place.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Place])],
  providers: [PlacesService],
  controllers: [PlacesController],
})
export class PlaceModule {}
