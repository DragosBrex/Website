import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {User} from "../../models/User";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnChanges{
  @Input() users!: User[]
  displayedColumns: string[] = ['UserId', 'Name', 'Email', 'Edit', 'Delete'];

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes are happen");
  }

  delete(id :string) {
    alert('delete function: ' + id);
  }

  edit(id:string) {
    alert('edit function: '+id);
  }
}
