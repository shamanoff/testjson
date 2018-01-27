import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {User} from './jsonwork/user';
import * as _ from 'lodash';
@Injectable()
export class FetchdataService {


  constructor(private _http: HttpClient) {
  }

  fetchData() {
    return this._http.get('../assets/data.json');

  }
}
