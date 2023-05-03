import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {UserTableComponent} from "../../components/user-table/user-table.component";
import {User} from "../../models/User";
import {AdminService} from "../../services/admin-service";
import {TicketTableComponent} from "../../components/ticket-table/ticket-table.component";
import {Ticket} from "../../models/Ticket";
import {DashboardComponent} from "../../components/dashboard/dashboard.component";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})

export class AdminPageComponent implements OnInit{

  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  constructor() {
  }

  createComponent() {
    this.container.clear();

    const userTableRef = this.container.createComponent(UserTableComponent);
    userTableRef.instance;
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
    this.container.clear();

    const dashboardRef = this.container.createComponent(DashboardComponent)
    dashboardRef.instance;
  }

  ngOnInit(): void {
    this.createDashBoard();
  }


}
