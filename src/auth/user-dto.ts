import { IsEmail, IsString } from 'class-validator';

// /* eslint-disable prettier/prettier */
export class loginDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
