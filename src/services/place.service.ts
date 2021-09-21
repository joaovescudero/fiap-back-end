import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Place } from '../entites/place.entity';
import { CreatePlaceDto } from '../dto/place/create-place.dto';

@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(Place)
    private placesRepository: Repository<Place>,
  ) {}

  create(createPlaceDto: CreatePlaceDto): Promise<Place> {
    const place = new Place();
    place.name = createPlaceDto.name;

    return this.placesRepository.save(place);
  }

  findAll(): Promise<Place[]> {
    return this.placesRepository.find();
  }

  findOne(id: string): Promise<Place> {
    return this.placesRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.placesRepository.delete(id);
  }
}
