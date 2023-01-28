import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { E621Service } from '../e621/e621.service';
import { GetWithTagsDto } from '../e621/get-with-tags.dto/get-with-tags.dto';

@Controller('posts')
export class PostsController {
  constructor(
    private postService: PostsService,
    private e621Service: E621Service,
  ) {
  }

  @Post()
  async fetchPosts(@Body() getWithTagsDto: GetWithTagsDto) {
    return await this.e621Service.fetche621Posts(getWithTagsDto);
  }

  @Get()
  async fetchSinglePost() {
  }
}
