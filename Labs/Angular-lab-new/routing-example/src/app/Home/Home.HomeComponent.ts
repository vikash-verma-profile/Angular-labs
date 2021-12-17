import { Component } from '@angular/core';
import {BaseLogger} from '../Utility/Utility.Logger';

@Component({
  templateUrl: './Home.HomeView.html'
})
export class HomeComponent {

  LogObj:BaseLogger;
  constructor(_logger:BaseLogger){
    this.LogObj=_logger;
    this.LogObj.Log();
  }
  
}
