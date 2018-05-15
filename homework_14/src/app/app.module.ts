import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreService } from './store.service';
import { AppComponent } from './app.component';
import { ClassComponent } from './class/class.component';
import { ScheduleComponent } from './schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
