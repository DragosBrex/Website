import {User} from "./User";

export interface Ticket
{
  created: Date
  id : string
  isProcessed: boolean
  processedDate?: Date
  user? : User

}
