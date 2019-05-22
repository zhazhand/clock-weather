import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less']
})
export class CalendarComponent implements OnInit {

  private time = new Observable < string > ((observer: Observer < string > ) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  private typeOfFormat: number;

  get format(): string {
    switch (this.typeOfFormat) {
      case 1:
        return "MM/dd/yy";
      case 2:
        return "dd.MM.yyyy";
      case 3:
        return "HH.mm";
      case 4:
        return "HH.mm.ss";
    }
  }

  changeFormat(): number {
    return this.typeOfFormat % 2 === 0 ? this.typeOfFormat-- : this.typeOfFormat++;
  }

  changeDemonstration(event: MouseEvent): number {
    event.preventDefault();
    return this.typeOfFormat = this.typeOfFormat > 2 ? this.typeOfFormat - 2 : this.typeOfFormat + 2;
  }

  ngOnInit() {
    this.typeOfFormat = 1;
  }

}
