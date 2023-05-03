import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {User} from "../../models/User";
import {AdminService} from "../../services/admin-service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnChanges, OnInit{
  @Input() users!: User[];
  displayedColumns: string[] = ['UserId', 'Name', 'Email', 'Edit', 'Delete'];

  constructor(private adminService : AdminService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes are happen");

  }

  delete(id :string) {

    this.adminService.deleteUser(id).subscribe(()=>
    {
      this.ngOnInit();
    },
    (error)=>
    {
      alert(error);
      this.ngOnInit();
    });

  }

  edit(id:string) {

  }

  ngOnInit(): void {

    this.adminService.getUsers().subscribe(u=>
    {
      this.users = u;
      console.log(this.users);
    });
  }

}
