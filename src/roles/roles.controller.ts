import { Body, Controller, Param, Post, Get } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create_role.dto';

@Controller('roles')
export class RolesController {
    constructor(private roleServise: RolesService){}

    @Post()
    create(@Body() dto: CreateRoleDto){
        return this.roleServise.createRole(dto);
    }


    @Get('/:value')
    getByValue(@Param('value') value:string){
        return this.roleServise.getRoleByValue(value);
    }
}
