import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './modules/users.module';
import { RootModule } from './modules/root.module';
import { UserResponsibleModule } from './modules/user-responsible.module';
import { User } from './entites/user.entity';
import { UserResponsible } from './entites/userResponsible.entity';
import { SessionModule } from './modules/session.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      database: 'postgres',
      username: 'postgres',
      password: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      entities: [User, UserResponsible],
    }),
    UsersModule,
    RootModule,
    UserResponsibleModule,
    SessionModule,
  ],
})
export class AppModule {}
