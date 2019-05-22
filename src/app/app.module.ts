import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }   from '@angular/common/http';

import { CalendarComponent } from './components/calendar/calendar.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherService } from './services/weather.service';
import { WindPipe} from './wind-pipe.pipe';
import { TemperaturePipe } from './temperature.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    WeatherComponent,
    WindPipe,
    TemperaturePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
