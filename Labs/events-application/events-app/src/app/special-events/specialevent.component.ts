import { Component } from '@angular/core';
import { EventService } from '../services/event.service';
import { SpecialEvent } from './specialevents.model';

@Component({
  selector: 'app-special-events',
  templateUrl: './specialevent.view.html',
})
export class SpecialEventsComponent {
  specialevents: Array<SpecialEvent> = new Array<SpecialEvent>();
  constructor(private _eventService: EventService) {}
  ngOnInit() {
    this._eventService.getSpecialEvents().subscribe(
      (res) => this.Sucess(res),
      (err) => console.log(err)
    );
  }

  Sucess(res: any) {
    this.specialevents = res;
  }
}
