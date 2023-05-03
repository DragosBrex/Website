import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from "../../models/Ticket";
import {AdminService} from "../../services/admin-service";

@Component({
  selector: 'app-ticket-table',
  templateUrl: './ticket-table.component.html',
  styleUrls: ['./ticket-table.component.css']
})
export class TicketTableComponent implements OnInit{
  @Input() tickets: Ticket[] = [];
  displayedColumns: string[] = ['TicketId', 'UserId', 'Name', 'Email', 'Created', 'Edit', 'Deleted']

  constructor(private adminService : AdminService) {
  }

  edit(id:string) {

  }

  delete(id:string) {

  }

  ngOnInit(): void {
    /*
    this.adminService.getTickets().pipe().subscribe(data=>
    {
      this.tickets = data;
      console.log(this.tickets);
    });
    */
  }


}
