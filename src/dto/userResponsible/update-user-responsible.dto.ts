import { PartialType } from '@nestjs/mapped-types';
import { CreateUserResponsibleDto } from './create-user-responsible.dto';

export class UpdateUserResponsibleDto extends PartialType(CreateUserResponsibleDto) {}
