import {User} from "./User";

export interface Ticket
{
  id : string
  user : User
  isProcessed: boolean
  processedDate: Date
  created: Date
}
