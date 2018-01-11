import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {User} from './user';
import {FetchdataService} from '../fetchdata.service';
import 'rxjs/add/operator/map';
import {MatPaginator, MatTableDataSource} from '@angular/material';



@Component({
  selector: 'app-jsonwork',
  templateUrl: './jsonwork.component.html',
  styleUrls: ['./jsonwork.component.scss']
})
export class JsonworkComponent implements OnInit, AfterViewInit {
  private _users: User[];
  dataSource;
  displayedColumns = [
    'id',
    'first_name',
    'last_name',
    'email',
    'gender',
    'ip_address'];


  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private _dataServ: FetchdataService) {
  }

  ngOnInit() {
    this._dataServ.fetchData().map(
      (data: User[]) => {
        this.dataSource = new MatTableDataSource(data);

        // this._users = data;
        console.log(this._users);
      }
    )
    .subscribe();
  }

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


