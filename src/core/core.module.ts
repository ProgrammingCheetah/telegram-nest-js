import { Global, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from '../Strategies/jwt-strategy';
//import { UsersRepository } from '../Entities/user.repository';

@Global()
@Module({
  providers: [JwtStrategy/* UsersRepository*/],
  imports: [
    ConfigModule.forRoot(),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: +configService.get('JWT_EXPIRATION_TIME'),
        },
      }),
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
  ],
  exports: [PassportModule, JwtModule],
})
export class CoreModule {
}
