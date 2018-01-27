import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {User} from './user';
import {FetchdataService} from '../fetchdata.service';
import 'rxjs/add/operator/map';
import {MatPaginator, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import * as _ from 'lodash';


@Component({
  selector: 'app-jsonwork',
  templateUrl: './jsonwork.component.html',
  styleUrls: ['./jsonwork.component.scss']
})
export class JsonworkComponent implements OnInit {
  displayedColumns = ['id', 'first_name', 'last_name', 'email', 'gender', 'ip_address'];
  fileNameDialogRef: MatDialogRef<DialogDataExampleDialog>;

  private onEditUser: User;
  fname: string;
  lname: string;

  private dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _dataServ: FetchdataService, public _dialog: MatDialog) {
  }

  ngOnInit() {
    this._dataServ.fetchData().map(
      (inputData: User[]) => {
        this.dataSource = new MatTableDataSource<User>(inputData);
        this.dataSource.paginator = this.paginator;
        // console.log(this.dataSource.data[2]);
      }
    ).subscribe();

  }

  editUser(user) {
    console.log(user);
    this.onEditUser = user;
    // console.log(this.onEditUser);
    this._dialog.open(DialogDataExampleDialog, { width: '350px',
      data: {
        id: user.id,
        fName: user.first_name,
        lName: user.last_name,
        email: user.email,
        gender: user.gender,
        ip: user.ip_address
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

  saveUser(){
    console.log(this.data)
      /*  let index = _.findIndex(this.dataSource.data, function (o) {
          return o.this.dataSource.data == this.onEditUser.id;
        });
        console.log(index);*/
  }
}


