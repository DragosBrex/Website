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
  displayedColumns: string[] = ['TicketId', 'UserId', 'Name', 'Email', 'Created', 'Status']

  constructor(private adminService : AdminService) {
  }
  ngOnInit(): void {
    this.updateTable();
  }


  accept(id:string) {
    this.adminService.aprooveTicket(id).subscribe(()=>
    {
      alert("accepted");
      this.updateTable();
    })
  }

  decline(id:string) {
    this.adminService.declineTicket(id).subscribe(()=>
    {
      alert("declined");
      this.updateTable()
    },
      error => this.updateTable())
  }

  private updateTable(){
    this.adminService.getTickets().pipe().subscribe(data=>
    {
      this.tickets = data;
      console.log(this.tickets);
    });
  }
}
