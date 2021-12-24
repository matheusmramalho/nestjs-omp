import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerDto } from './dto/customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly _customerRepository: Repository<Customer>,
  ) {}

  findAll() {
    return this._customerRepository.find();
  }

  async findOne(id: number) {
    const customer = await this._customerRepository.findOne(id);

    if (!customer) {
      throw new NotFoundException(`Customer ID ${id} not found`);
    }

    return customer;
  }

  create(customerDto: CustomerDto) {
    const customer = this._customerRepository.create(customerDto);
    return this._customerRepository.save(customer);
  }

  async update(id: number, customerDto: CustomerDto) {
    const customer = await this._customerRepository.preload({
      id,
      ...customerDto,
    });

    if (!customer) {
      throw new NotFoundException(`Customer ID ${id} not found`);
    }

    return this._customerRepository.save(customer);
  }

  async remove(id: number) {
    const customer = await this._customerRepository.findOne(id);

    if (!customer) {
      throw new NotFoundException(`Customer ID ${id} not found`);
    }

    return this._customerRepository.remove(customer);
  }
}
