export class CreateUserDto {
  name: string;
  email: string;
  password: string;
  document: string;
  birthday: Date;
  mobile: string;
  isEnabled: boolean;
}
