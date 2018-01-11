import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from './user';
import {FetchdataService} from '../fetchdata.service';
import 'rxjs/add/operator/map';
import {MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-jsonwork',
  templateUrl: './jsonwork.component.html',
  styleUrls: ['./jsonwork.component.scss']
})
export class JsonworkComponent implements OnInit {
  displayedColumns = ['id', 'first_name', 'last_name', 'email', 'gender', 'ip_address'];
  private dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _dataServ: FetchdataService) {
  }

  ngOnInit() {
    this._dataServ.fetchData().map(
      (data: User[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      }
    ).subscribe();
  }

}


