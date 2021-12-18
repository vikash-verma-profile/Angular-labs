import { Component } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from './event.model';

@Component({
  selector: 'app-events',
  templateUrl: './event.eventview.html',
})
export class EventsComponent {
    events:Array<Event>=new Array<Event>();
  constructor(private _eventService:EventService) {}
  ngOnInit(){
    this._eventService.getEvents().subscribe(res=>this.events=res,err=>console.log(err));
    console.log(this.events);
}
}
