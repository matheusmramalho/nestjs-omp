import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CustomerDto } from './dto/customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  private customers: Customer[] = [
    {
      id: 1,
      name: 'Matheus',
    },
  ];

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    const customer = this.customers.find((c) => c.id == id);

    if (!customer) {
      throw new HttpException(
        `Customer ID ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return customer;
  }

  create(customerDto: CustomerDto) {
    const customer: Customer = {
      id: 1,
      name: customerDto.name,
    };

    this.customers.push(customer);
    return customerDto;
  }

  update(id: number, customerDto: Customer) {
    const index = this.customers.findIndex((c) => c.id === id);
    this.customers[index] = customerDto;
  }

  remove(id: number) {
    const index = this.customers.findIndex((c) => c.id === id);
    if (index >= 0) {
      this.customers.splice(index, 1);
    }
  }
}
