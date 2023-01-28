import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { E621Service } from './e621/e621.service';
import { CoreModule } from './core/core.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { DatabaseService } from './database/database.service';
import { PostsModule } from './posts/posts.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    CoreModule,
    ConfigModule.forRoot(),
    UserModule,
    PostsModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService, E621Service, DatabaseService],
})
export class AppModule {
}
