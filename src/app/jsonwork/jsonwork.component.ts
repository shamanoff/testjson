import {ChangeDetectionStrategy, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {User} from './user';
import {FetchdataService} from '../fetchdata.service';
import 'rxjs/add/operator/map';
import {MatPaginator, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import * as _ from 'lodash';


@Component({
  selector: 'app-jsonwork',
  templateUrl: './jsonwork.component.html',
  styleUrls: ['./jsonwork.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class JsonworkComponent implements OnInit {
  displayedColumns = ['id', 'first_name', 'last_name', 'email', 'gender', 'ip_address'];
  private onEditUser: User;
  private dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _dataServ: FetchdataService, public _dialog: MatDialog) {
  }

  ngOnInit() {
    this.dataServ();
  }

  dataServ() {
    this._dataServ.fetchData().map(
      (inputData: User[]) => {
        this.dataSource = new MatTableDataSource<User>(inputData);
        this.dataSource.paginator = this.paginator;
      }
    ).subscribe();
  }

  editUser(user) {
    this.onEditUser = user;
    const dialogRef = this._dialog.open(DialogDataExampleDialog, {
      width: '350px',
      data: {
        id: user.id,
        fName: user.first_name,
        lName: user.last_name,
        email: user.email,
        gender: user.gender,
        ip: user.ip_address
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      let newUser: User = result;
      let resId = result.id;
      let index = _.findIndex(this.dataSource.data, {id: resId});
      this.dataSource.data[index] = Object.assign(newUser);
      console.log(this.dataSource.data);
    });
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
  constructor(public thisDialogRef: MatDialogRef<DialogDataExampleDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onCloseConfirm() {
    console.log('onCloseWork');
    this.thisDialogRef.close(this.data);
  }


}


