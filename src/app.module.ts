import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './modules/users.module';
import { RootModule } from './modules/root.module';
import { UserResponsibleModule } from './modules/user-responsible.module';
import { User } from './entites/user.entity';
import { UserResponsible } from './entites/userResponsible.entity';
import { SessionModule } from './modules/session.module';
import { Place } from './entites/place.entity';
import { PlaceModule } from './modules/place.module';
import { Plate } from './entites/plate.entity';
import { PlateModule } from './modules/plate.module';
import { UserLocationHistoryModule } from './modules/userLocationHistory.module';
import { UserLocationHistory } from './entites/userLocationHistory.entity';

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
      entities: [User, UserResponsible, Place, Plate, UserLocationHistory],
    }),
    UsersModule,
    RootModule,
    UserResponsibleModule,
    SessionModule,
    PlaceModule,
    PlateModule,
    UserLocationHistoryModule,
  ],
})
export class AppModule {}
