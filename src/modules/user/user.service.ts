import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { user } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(user.name) private userModel) {}

  async create(data: any) {
    try {
      console.log(data);
      const user = await new this.userModel(data);
      return user.save();
    } catch (error) {
      return '';
    }
  }

  async findAll() {
    try {
      const user = await this.userModel.find();
      console.log(user);
      return { lsaf: 'sdf' };
    } catch (error) {
      return '';
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: any) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
