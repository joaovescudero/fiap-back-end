import { Controller, Get } from '@nestjs/common';
import { RootService } from '../services/root.service';

@Controller()
export class RootController {
  constructor(private readonly rootService: RootService) {}

  @Get()
  getRoot(): {} {
    return this.rootService.getRoot();
  }
}
