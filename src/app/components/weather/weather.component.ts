import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { City } from '../../interfaces';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.less']
})
export class WeatherComponent implements OnInit {
  
public cityWeather:City;

  constructor(private weatherService: WeatherService) { }


  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getDniproWeather().subscribe((data:City) => this.cityWeather = data);
  }

}
