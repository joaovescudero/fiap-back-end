import { Injectable } from '@nestjs/common';

@Injectable()
export class RootService {
  getRoot(): Record<string, unknown> {
    return {
      version: 1,
      stage: process.env.NODE_ENV || 'development',
    };
  }
}
