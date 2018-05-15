import { Component, OnInit } from '@angular/core';
import { ClassComponent } from '../class/class.component';
import { StoreService, ILessons } from '../store.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  public lessons: Array<ILessons>;

  constructor(service: StoreService) {

  this.lessons = service.lessons;
   }
   addClass() {
    const obj = {
      id: null,
      topic: null,
      date: null,
      lecturer: null,
      isEditable: false
    };
    this.lessons.push(obj);
   }

  ngOnInit() {
  }

}
