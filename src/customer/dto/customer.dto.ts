import { isString, IsString } from 'class-validator';

export class CustomerDto {
  @IsString()
  readonly name: string;

  @IsString({ each: true })
  readonly tags: string[];
}

export class UpdateCustomerDto {}
