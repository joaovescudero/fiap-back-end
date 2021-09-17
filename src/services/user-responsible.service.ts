import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserResponsible } from 'src/entites/userResponsible.entity';
import { Repository } from 'typeorm';
import { CreateUserResponsibleDto } from '../dto/userResponsible/create-user-responsible.dto';
import { UpdateUserResponsibleDto } from '../dto/userResponsible/update-user-responsible.dto';

@Injectable()
export class UserResponsibleService {
  constructor(
    @InjectRepository(UserResponsible)
    private userResponsibleRepository: Repository<UserResponsible>,
  ) {}
  create(createUserResponsibleDto: CreateUserResponsibleDto) {
    return 'This action adds a new userResponsible';
  }

  async findAll() {
    try {
      const userResponsibles = await this.userResponsibleRepository.find();

      return userResponsibles;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} userResponsible`;
  }

  update(id: number, updateUserResponsibleDto: UpdateUserResponsibleDto) {
    return `This action updates a #${id} userResponsible`;
  }

  remove(id: number) {
    return `This action removes a #${id} userResponsible`;
  }
}
