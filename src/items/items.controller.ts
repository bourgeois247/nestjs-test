import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { Item } from '../item';
import { Items } from '../items';
import { ItemService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  async findAll(): Promise<Items> {
    return this.itemService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: number): Promise<Item> {
    return this.itemService.find(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body('item') item: Item) {
    this.itemService.create(item);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put()
  update(@Body('item') item: Item) {
    this.itemService.update(item);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  delete(@Param('id') id: number) {
    this.itemService.delete(id);
  }
}

