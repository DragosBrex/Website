import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {User} from "../../models/User";
import {AdminService} from "../../services/admin-service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {MatDialog} from "@angular/material/dialog";
import {DeleteDialogComponent} from "../../shared/delete-dialog/delete-dialog.component";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit{
  @Input() users!: User[];
  displayedColumns: string[] = ['UserId', 'Name', 'Email', 'Edit', 'Delete'];
  private _dialog : MatDialog;

  constructor(private adminService : AdminService, dialog: MatDialog) {
    this._dialog = dialog;
  }


  delete(element : User) {

    const dialogRef = this._dialog.open(DeleteDialogComponent, {
      width: '400px',
      data: { name: element.name },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // eslint-disable-next-line rxjs/no-nested-subscribe
        this.adminService.deleteUser(element.id!).subscribe(() => {
          this.updateTable();
        },
          error =>
          {
            this.updateTable();
          });
      }
    });
  }

  edit(id:string) {

  }
  private updateTable()
  {
    this.adminService.getUsers().subscribe(u=>
    {
      this.users = u;
    }, (error: unknown) => {
      console.log('Error fetching response', error);
    });
  }

  ngOnInit(): void {
    this.updateTable();
  }
}
