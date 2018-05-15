import {Component, OnInit} from '@angular/core';
import {StoreService, ILessons} from '../store.service';
@Component({selector: 'app-class', templateUrl: './class.component.html', styleUrls: ['./class.component.css']})
export class ClassComponent implements OnInit {
  public lessons : Array < ILessons >;
  public previous;

  constructor(service : StoreService) {
    this.lessons = service.lessons;
  }
  editClass(lesson) {
    lesson.isEditable = true;
    this.previous = lesson;
    console.log(this.previous);
  }

  saveClass(lesson) {
    const newLesson = JSON.stringify(this.lessons);
    localStorage.setItem('lessons', newLesson);
    lesson.isEditable = false;
  }

  deleteClass(item) {
    console.log(item)
    this
      .lessons
      .splice(item, 1);
  }
  ngOnInit() {

  }
}
