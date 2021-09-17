import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserResponsibleService } from '../services/user-responsible.service';
import { CreateUserResponsibleDto } from '../dto/userResponsible/create-user-responsible.dto';
import { UpdateUserResponsibleDto } from '../dto/userResponsible/update-user-responsible.dto';

@Controller('user-responsible')
export class UserResponsibleController {
  constructor(
    private readonly userResponsibleService: UserResponsibleService,
  ) {}

  @Post()
  create(@Body() createUserResponsibleDto: CreateUserResponsibleDto) {
    return this.userResponsibleService.create(createUserResponsibleDto);
  }

  @Get()
  findAll() {
    return this.userResponsibleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userResponsibleService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserResponsibleDto: UpdateUserResponsibleDto,
  ) {
    return this.userResponsibleService.update(+id, updateUserResponsibleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userResponsibleService.remove(+id);
  }
}
