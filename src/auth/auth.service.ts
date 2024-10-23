import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { AuthResponseDto } from './auth.dto';
import { compareSync } from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    private readonly jwtExpiration: number;

    constructor(
        private readonly configService: ConfigService,
        private readonly userService: UsersService,
        private readonly jwtService: JwtService,
    ) {
        this.jwtExpiration = +configService.get<number>('JWT_EXPIRATION_TIME');
    }

    signIn(username: string, password: string): AuthResponseDto {
        const user = this.userService.getByUsername(username);
        if (!user || !compareSync(password, user.password))
            throw new UnauthorizedException();

        const payload = { sub: user.id, username: user.username }

        const token = this.jwtService.sign(payload);

        return { token, expiresIn: this.jwtExpiration }
    }
}
