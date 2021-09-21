import { Module } from '@nestjs/common';
import { SessionService } from '../services/session.service';
import { SessionController } from '../controllers/session.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entites/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [SessionController],
  providers: [SessionService],
})
export class SessionModule {}
