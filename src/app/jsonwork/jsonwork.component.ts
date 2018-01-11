import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {User} from './user';
import {FetchdataService} from '../fetchdata.service';
import 'rxjs/add/operator/map';
import {MatPaginator, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-jsonwork',
  templateUrl: './jsonwork.component.html',
  styleUrls: ['./jsonwork.component.scss']
})
export class JsonworkComponent implements OnInit {
  displayedColumns = ['id', 'first_name', 'last_name', 'email', 'gender', 'ip_address'];

  private onEditUser: User;
  fname: string;
  lname: string;

  private dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _dataServ: FetchdataService, public _dialog: MatDialog) {
  }

  ngOnInit() {
    this._dataServ.fetchData().map(
      (data: User[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      }
    ).subscribe();
  }

  editUser(id) {
    this.onEditUser = id;
    console.log(this.onEditUser);
    this._dialog.open(DialogDataExampleDialog, {
      data: {
        fName: id.first_name
      }
    });
  }


}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}


