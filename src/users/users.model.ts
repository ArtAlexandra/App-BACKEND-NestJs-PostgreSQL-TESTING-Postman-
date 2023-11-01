
import { ApiProperty } from "@nestjs/swagger";
import {  Model, Column, DataType, Table } from "sequelize-typescript";

interface UserCreationAttrs{
    email: string;
    password:string;
}

@Table({tableName: "users"})
export class User extends Model<User,UserCreationAttrs>{
    @ApiProperty({example: "1", description: "Уникальный индентификатор пользователя"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: "user@mail.ru", description:"Почта (логин)"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email:string;

    @ApiProperty({example: "12345qwert", description: "Пароль"})
    @Column({type: DataType.STRING, allowNull: false})
    password:string;

    @ApiProperty({example: "true", description: "Забанен или нет"})
    @Column({type: DataType.BOOLEAN, defaultValue:false})
    banned:boolean;

    @ApiProperty({example: "Спам", description: "Причина блокировки"})
    @Column({type: DataType.STRING, allowNull: true})
    banReason:string;

}