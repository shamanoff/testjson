import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {User} from './user';
import {FetchdataService} from '../fetchdata.service';
import 'rxjs/add/operator/map';
import {MatPaginator, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import * as _ from 'lodash';
import index from '@angular/cli/lib/cli';
import {AddComponent} from '../add/add.component';


@Component({
  selector: 'app-jsonwork',
  templateUrl: './jsonwork.component.html',
  styleUrls: ['./jsonwork.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class JsonworkComponent implements OnInit {
  displayedColumns = ['id', 'first_name', 'last_name', 'email', 'gender', 'ip_address', 'actions'];
  private onEditUser: User;
  private dataSource;
  // private size: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _dataServ: FetchdataService, public _dialog: MatDialog, private changeDetectorRefs: ChangeDetectorRef) {
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
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        gender: user.gender,
        ip_address: user.ip_address
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      const newUser: User = result;
      const resId = result.id;
      const index = _.findIndex(this.dataSource.data, {id: resId});
      // this.dataSource.data[index] = Object.assign(newUser);
      this.dataSource.data[index] = newUser;
      this.refreshTable();
      // console.log(this.dataSource.data);
    });
  }

  deleteUser(id) {
    let index = _.findIndex(this.dataSource.data, {id: id});
    this.dataSource.data.splice(index, 1);
    this.refreshTable();
  }

  private refreshTable() {
    // if there's a paginator active we're using it for refresh
    if (this.dataSource._paginator.hasNextPage()) {
      this.dataSource._paginator.nextPage();
      this.dataSource._paginator.previousPage();
      // in case we're on last page this if will tick
    } else if (this.dataSource._paginator.hasPreviousPage()) {
      this.dataSource._paginator.previousPage();
      this.dataSource._paginator.nextPage();
      // in all other cases including active filter we do it like this
    }
  }

  openDialog(): void {
    const dialogRef = this._dialog.open(AddComponent, {
      width: '250px',
      // data: { user: user}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(JSON.stringify(result));
      this.dataSource.data.unshift(result);
      this.dataSource._updatePaginator(this.dataSource.data.length);
      console.log(this.dataSource.data);
      this.refreshTable();
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


