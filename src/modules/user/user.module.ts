import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { user, userSchema } from 'src/schemas/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: user.name, schema: userSchema}])],
  controllers: [UserController],
  providers: [UserService],
  exports: [MongooseModule]
})
export class UserModule {}
