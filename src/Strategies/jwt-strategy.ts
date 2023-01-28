import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
//import {UserRepository} from "../Entities/user";
//import {UsersRepository} from "../Entities/user.repository";
import { JwtPayload } from '../user/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    //private userRepository: UsersRepository,
    private readonly configService: ConfigService,
  ) {
    super({
      secretOrKey: configService.get('JWT_SECRET') ?? "SECRET KEY ULTRA SECRET",
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
    });
  }

  async validate(payload: JwtPayload) {
    const { username } = payload;
    //const user: UserRepository = await this.userRepository.findByUsername(username);
    //
    //if (!user) throw new UnauthorizedException();
    //return user;
  }
}