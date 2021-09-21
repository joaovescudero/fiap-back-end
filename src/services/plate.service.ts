import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plate } from '../entites/plate.entity';
import { CreatePlateDto } from '../dto/plate/create-plate.dto';

@Injectable()
export class PlatesService {
  constructor(
    @InjectRepository(Plate)
    private platesRepository: Repository<Plate>,
  ) {}

  create(createPlaceDto: CreatePlateDto): Promise<Plate> {
    const plate = new Plate();
    plate.north = createPlaceDto.north;
    plate.northType = createPlaceDto.northType;
    plate.south = createPlaceDto.south;
    plate.southType = createPlaceDto.southType;
    plate.east = createPlaceDto.east;
    plate.eastType = createPlaceDto.eastType;
    plate.west = createPlaceDto.west;
    plate.westType = createPlaceDto.westType;

    return this.platesRepository.save(plate);
  }

  findAll(): Promise<Plate[]> {
    return this.platesRepository.find();
  }

  findOne(id: string): Promise<Plate> {
    return this.platesRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.platesRepository.delete(id);
  }
}
