import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class WeatherService {

  public apiKey: string = 'abf4ec5fb246141571c859102bc01279';
  public cityId: string  = '709930';

  constructor( private http: HttpClient) { }

  getDniproWeather()   {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?id=${this.cityId}&APPID=${this.apiKey}`);
  }
}
