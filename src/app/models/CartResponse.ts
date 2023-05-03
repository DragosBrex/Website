import { Product } from "./product";


export class CartResponse
{
    id?: string;
    product?: Product;
    purchasedDate?: Date;
    isBought?: boolean;
}