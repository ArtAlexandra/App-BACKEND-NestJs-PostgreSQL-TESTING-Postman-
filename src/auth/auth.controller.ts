import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@ApiTags("Авторизация")
@Controller('auth')
export class AuthController {
    constructor(private authServeci: AuthService){}

    @Post("/login")
    login(@Body()userDto: CreateUserDto){
        return this.authServeci.login(userDto);
    }

    @Post("/registration")
    registration(@Body()userDto: CreateUserDto){
        return this.authServeci.registration(userDto);
    }

}
