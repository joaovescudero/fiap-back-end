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
      host: process.env.HOST || 'localhost',
      database: process.env.DATABASE || 'postgres',
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      entities: [User, UserResponsible, Place, Plate, UserLocationHistory],
      ssl: process.env.NODE_ENV === 'production',
      extra:
        process.env.NODE_ENV === 'production'
          ? {
              ssl: {
                rejectUnauthorized: false,
              },
            }
          : {},
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
