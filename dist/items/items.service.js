"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let ItemService = class ItemService {
    constructor() {
        this.items = {
            1: {
                id: 1,
                name: 'Burger',
                price: 5.99,
                description: 'Tasty',
                image: 'https://cdn.auth0.com/blog/whatabyte/burger-sm.png',
            },
            2: {
                id: 2,
                name: 'Pizza',
                price: 2.99,
                description: 'Cheesy',
                image: 'https://cdn.auth0.com/blog/whatabyte/pizza-sm.png',
            },
            3: {
                id: 3,
                name: 'Tea',
                price: 1.99,
                description: 'Informative',
                image: 'https://cdn.auth0.com/blog/whatabyte/tea-sm.png',
            },
        };
    }
    findAll() {
        return this.items;
    }
    create(newItem) {
        const id = new Date().valueOf();
        this.items[id] = Object.assign(Object.assign({}, newItem), { id });
    }
    find(id) {
        const record = this.items[id];
        if (record) {
            return record;
        }
        throw new Error('No record found');
    }
    update(updatedItem) {
        if (this.items[updatedItem.id]) {
            this.items[updatedItem.id] = updatedItem;
            return;
        }
        throw new Error('No record found to update');
    }
    delete(id) {
        const record = this.items[id];
        if (record) {
            delete this.items[id];
            return;
        }
        throw new Error('No record found to delete');
    }
};
ItemService = __decorate([
    common_1.Injectable()
], ItemService);
exports.ItemService = ItemService;
//# sourceMappingURL=items.service.js.map