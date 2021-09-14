import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './modules/users.module';
import { RootModule } from './modules/root.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: `${__dirname}/data.sqlite`,
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    RootModule,
  ],
})
export class AppModule {}
