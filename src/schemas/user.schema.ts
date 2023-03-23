import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class user {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Number, required: true })
  age: number;

  @Prop({ type: String, required: true })
  dateOfBirth: string;
}

export const userSchema = SchemaFactory.createForClass(user);