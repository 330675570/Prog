// import { Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class HttpService {
    constructor(private http: HttpClient) { }


    getFromServer(): Observable<any> {
      return this.http.get<any>('https://localhost:7204/WeatherForecast');
  }
}
