import {Role} from "./Role";

export class User {
    id?: string;
    name?: string;
    email?: string;
    roles? : Role[];
}
