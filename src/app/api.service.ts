import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public _http: HttpClient) { }

  getUpdates() {
    const URL = `https://api.covid19india.org/state_district_wise.json`
    return this._http.get(URL).pipe(map(x => x));
  }
}
