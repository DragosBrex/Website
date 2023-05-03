import {Component, ViewChild, ViewContainerRef} from '@angular/core';
import {UserTableComponent} from "../../components/user-table/user-table.component";
import {User} from "../../models/User";
import {AdminService} from "../../services/admin-service";
import {TicketTableComponent} from "../../components/ticket-table/ticket-table.component";
import {Ticket} from "../../models/Ticket";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})

export class AdminPageComponent {

  constructor(private adminService : AdminService) {
  }

  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  private users: User[] = [];
  private tickets: Ticket[] = [];

  createComponent() {
    this.container.clear();
    //userTableRef.instance.users = this.users
    this.adminService.getUsers().subscribe(u=>
    {
      this.users = u;
      const userTableRef = this.container.createComponent(UserTableComponent);
      userTableRef.setInput('users', this.users);
    });

  }

  createComponentProducts() {
    this.container.clear();
  }

  createComponentRequests() {
    this.container.clear();

    const ticketTableRef = this.container.createComponent(TicketTableComponent)
    ticketTableRef.instance;

  }

  createDashBoard() {

  }
}
