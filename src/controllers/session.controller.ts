import { Body, Controller, Post } from '@nestjs/common';
import { Session } from 'src/entites/session.entity';
import { SessionService } from '../services/session.service';

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post()
  findOne(@Body() user: Session) {
    return this.sessionService.findOne(user);
  }
}
