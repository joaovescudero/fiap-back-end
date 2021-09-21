import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Session } from 'src/entites/session.entity';
import { User } from 'src/entites/user.entity';
import { Repository } from 'typeorm';
import { USER_NOT_FOUND } from '../common/constants';
@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findOne(user: Session): Promise<User | string> {
    const { email, password } = user;

    const sessionUser = await this.userRepository.findOne({ email, password });
    if (!sessionUser) return USER_NOT_FOUND;

    return sessionUser;
  }
}
