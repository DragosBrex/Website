import {Component, Input} from '@angular/core';
import {Ticket} from "../../models/Ticket";

@Component({
  selector: 'app-ticket-table',
  templateUrl: './ticket-table.component.html',
  styleUrls: ['./ticket-table.component.css']
})
export class TicketTableComponent {
  @Input() tickets!: Ticket[];
  displayedColumns: string[] = ['TicketId', 'UserId', 'Name', 'Email', 'Created', 'Edit', 'Deleted']

  edit(id:string) {

  }

  delete(id:string) {

  }
}
