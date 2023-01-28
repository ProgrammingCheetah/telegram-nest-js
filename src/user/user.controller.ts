import { Body, Controller, Post } from '@nestjs/common';
import { ExtractJWT, JWT } from './get-jwt/get-jwt.decorator';

@Controller('user')
export class UserController {
  @Post('/getUser')
  getUser(@Body() body, @JWT() jwt: string) {
    //const userparams =

  }
}
