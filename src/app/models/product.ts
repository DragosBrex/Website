import {User} from "./User";

export class Product
{
    id = "";
    name = "";
    description = "";
    isNegotiable = false;
    price = 0;
    quantity = 0;
    display = true;
    comments = null;
    seller! : User;
}
