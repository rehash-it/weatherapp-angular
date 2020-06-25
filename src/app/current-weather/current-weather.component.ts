import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;
  constructor(private weatherService: WeatherService) {
    this.current = {
      city: 'Bethesda',
      country: 'US',
      date: 12355,
      image: 'assets/img/rehna.png',
      temperature: 72,
      description: 'sunny',
    } as ICurrentWeather;
  }

  ngOnInit() {
    this.weatherService
      .getCurrentWeather('BetheSada', 'US')
      .subscribe(function (data) {
        this.current = data;
      });
  }
}
