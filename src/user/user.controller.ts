import { Body, Controller, Get, Post } from '@nestjs/common';
import { create } from 'domain';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('user')
export class UserController {
   @Post()
    async createUser(@Body() createUser: CreateUserDto){
          return {
            ...createUser,
            password: undefined,
         };
        }
    }