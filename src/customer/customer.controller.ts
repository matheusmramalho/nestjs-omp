import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDto } from './dto/customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  listCustomers() {
    return this.customerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const customer = this.customerService.findOne(Number(id));
    return customer;
  }

  @Post()
  create(@Body() customerDto: CustomerDto) {
    this.customerService.create(customerDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    this.customerService.update(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.customerService.remove(Number(id));
  }
}
