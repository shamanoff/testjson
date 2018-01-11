import {Component, OnInit} from '@angular/core';
import {User} from './user';
import {FetchdataService} from '../fetchdata.service';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-jsonwork',
  templateUrl: './jsonwork.component.html',
  styleUrls: ['./jsonwork.component.scss']
})
export class JsonworkComponent implements OnInit {
  private _users: User[];

  constructor(private _dataServ: FetchdataService) {
  }

  ngOnInit() {
    this._dataServ.fetchData().map(
      (data: User[]) => {
        this._users = data;
        console.log(this._users);
      }
    )
    .subscribe();
  }

}
