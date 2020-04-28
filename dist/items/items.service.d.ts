import { Item } from '../item';
import { Items } from '../items';
export declare class ItemService {
    private readonly items;
    findAll(): Items;
    create(newItem: Item): void;
    find(id: number): Item;
    update(updatedItem: Item): void;
    delete(id: number): void;
}
