import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EventService {
  private _eventUrl = 'http://localhost:3000/api/events';
  private _specialEventsUrl = 'http://localhost:3000/api/special';

  constructor(private http: HttpClient) {}

  getEvents() {
    //this.http.get<any>(this._eventUrl).subscribe(res=>console.log(res),err=>console.log(err))

    return this.http.get<any>(this._eventUrl);
  }

  getSpecialEvents() {
   // var token = localStorage.getItem('token');
    // var _headers = new HttpHeaders();

    // _headers.append('Authorization', 'bearer ' + token);

    // return this.http.get<any>(this._specialEventsUrl, {
    //   headers: _headers,
    // });
    return this.http.get<any>(this._specialEventsUrl);
  }
}
