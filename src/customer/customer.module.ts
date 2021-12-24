import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { Customer } from './entities/customer.entity';
import { Recipe } from './entities/recipe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer, Recipe])],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
