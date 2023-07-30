import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService){}
  
  create(createUserDto: CreateUserDto) {
    return this.prisma.users.create({
      data: createUserDto,
    });
  }

  findAll() {
    return this.prisma.users.findMany({
      orderBy: {
        createdAt: 'desc',
      }
    });
  }

  findOne(id: number) {
    return this.prisma.users.findUniqueOrThrow({
      where: {
        id,
      }
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.users.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.users.delete({
      where: {
        id,
      },
    });
  }
}
