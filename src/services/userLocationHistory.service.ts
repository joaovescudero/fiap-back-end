import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserLocationHistoryDto } from '../dto/userLocationHistory/create-user-location-history.dto';
import { UserLocationHistory } from '../entites/userLocationHistory.entity';

@Injectable()
export class UserLocationHistoryService {
  constructor(
    @InjectRepository(UserLocationHistory)
    private userLocationHistoryRepository: Repository<UserLocationHistory>,
  ) {}

  create(
    createUserLocationHistoryDto: CreateUserLocationHistoryDto,
  ): Promise<UserLocationHistory> {
    const userLocationHistory = new UserLocationHistory();
    userLocationHistory.plate = createUserLocationHistoryDto.plate;
    userLocationHistory.user = createUserLocationHistoryDto.user;

    return this.userLocationHistoryRepository.save(userLocationHistory);
  }

  findAll(): Promise<UserLocationHistory[]> {
    return this.userLocationHistoryRepository.find();
  }

  findOne(id: string): Promise<UserLocationHistory> {
    return this.userLocationHistoryRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.userLocationHistoryRepository.delete(id);
  }
}
