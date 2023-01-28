import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'main',
      //entities: [path.join(__dirname, '/entities/**/*.entity{.ts,.js}')],
    }),
  ],
})
export class DatabaseModule {
}
