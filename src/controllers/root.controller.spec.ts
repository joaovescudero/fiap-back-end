import { Test, TestingModule } from '@nestjs/testing';
import { RootController } from './root.controller';
import { RootService } from '../services/root.service';

describe('RootController', () => {
  let rootController: RootController;

  beforeEach(async () => {
    const root: TestingModule = await Test.createTestingModule({
      controllers: [RootController],
      providers: [RootService],
    }).compile();

    rootController = root.get<RootController>(RootController);
  });

  describe('root', () => {
    it('should return JSON with data', () => {
      expect(rootController.getRoot()).toStrictEqual({
        version: 1,
        stage: 'test',
      });
    });
  });
});
