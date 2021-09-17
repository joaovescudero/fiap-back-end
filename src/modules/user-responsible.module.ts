import { Module } from '@nestjs/common';
import { UserResponsibleService } from '../services/user-responsible.service';
import { UserResponsibleController } from '../controllers/user-responsible.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserResponsible } from 'src/entites/userResponsible.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserResponsible])],
  controllers: [UserResponsibleController],
  providers: [UserResponsibleService],
})
export class UserResponsibleModule {}
