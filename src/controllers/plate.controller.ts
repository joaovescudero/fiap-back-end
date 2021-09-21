import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { PlatesService } from '../services/plate.service';
import { CreatePlateDto } from '../dto/plate/create-plate.dto';
import { Plate } from '../entites/plate.entity';

@Controller('plates')
export class PlatesController {
  constructor(private readonly platesService: PlatesService) {}

  @Post()
  create(@Body() createPlateDto: CreatePlateDto): Promise<Plate> {
    return this.platesService.create(createPlateDto);
  }

  @Get()
  findAll(): Promise<Plate[]> {
    return this.platesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Plate> {
    return this.platesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.platesService.remove(id);
  }
}
