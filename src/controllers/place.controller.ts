import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { CreatePlaceDto } from '../dto/place/create-place.dto';
import { PlacesService } from '../services/place.service';
import { Place } from 'src/entites/place.entity';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Post()
  create(@Body() createPlaceDto: CreatePlaceDto): Promise<Place> {
    return this.placesService.create(createPlaceDto);
  }

  @Get()
  findAll(): Promise<Place[]> {
    return this.placesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Place> {
    return this.placesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.placesService.remove(id);
  }
}
