import { Item } from '../item';
import { Items } from '../items';
import { ItemService } from './items.service';
export declare class ItemsController {
    private readonly itemService;
    constructor(itemService: ItemService);
    findAll(): Promise<Items>;
    find(id: number): Promise<Item>;
    create(item: Item): void;
    update(item: Item): void;
    delete(id: number): void;
}
