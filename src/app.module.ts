import { Module } from "@nestjs/common";

import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { UsersController } from './users/users.controller';
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';


@Module({
  controllers: [],
    providers: [],
  
    imports: [
      
      ConfigModule.forRoot({
        envFilePath: `.${process.env.NODE_ENV}.env`
      }),
        SequelizeModule.forRoot({
          dialect: 'postgres',
          host: process.env.POSTGRES_HOST, //'localhost'
          port:Number(process.env.POSTGRES_PORT),//  5432
          username: process.env.POSTGRES_USER,// 'postgres'
          password: process.env.POSTGRES_PASSWORD,// 'root'
          database: process.env.POSTGRES_DB,// 'Test2'
          models: [User, Role,UserRoles],
         autoLoadModels: true,
        
       //  synchronize:true,
        
        
        }),
        UsersModule,
        RolesModule,
        AuthModule,
      ],
    //controllers: [UsersController],
    //providers: [],
  
})
export class AppModule{}