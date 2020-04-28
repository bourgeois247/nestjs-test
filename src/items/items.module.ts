import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemService } from './items.service';

@Module({
  controllers: [ItemsController],
  providers: [ItemService]
})
export class ItemsModule {}
