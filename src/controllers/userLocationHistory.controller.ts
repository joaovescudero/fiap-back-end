import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { CreateUserLocationHistoryDto } from '../dto/userLocationHistory/create-user-location-history.dto';
import { UserLocationHistory } from '../entites/userLocationHistory.entity';
import { UserLocationHistoryService } from '../services/userLocationHistory.service';

@Controller('userLocationHistory')
export class UserLocationHistoryController {
  constructor(
    private readonly userLocationHistoryService: UserLocationHistoryService,
  ) {}

  @Post()
  create(
    @Body() createUserLocationHistoryDto: CreateUserLocationHistoryDto,
  ): Promise<UserLocationHistory> {
    return this.userLocationHistoryService.create(createUserLocationHistoryDto);
  }

  @Get()
  findAll(): Promise<UserLocationHistory[]> {
    return this.userLocationHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<UserLocationHistory> {
    return this.userLocationHistoryService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userLocationHistoryService.remove(id);
  }
}
