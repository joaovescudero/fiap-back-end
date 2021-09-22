export class CreateUserDto {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  document: string;
  birthday: Date;
  mobile: string;
  isEnabled: boolean;
}
