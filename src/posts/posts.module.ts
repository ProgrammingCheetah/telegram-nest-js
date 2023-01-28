import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { E621Service } from '../e621/e621.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService, E621Service]
})
export class PostsModule {}
