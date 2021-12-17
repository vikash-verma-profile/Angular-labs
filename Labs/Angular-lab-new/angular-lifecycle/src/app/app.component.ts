import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lifecycle';

  constructor(){
    console.log('constructor is called');
  }

  ngOnChanges(){
    console.log('ngOnChanges is called');
  }
  ngOnInit(){
    console.log('ngOnInit is called');
  }
  ngDoCheck(){
    console.log("ngDoCheck is called");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit is called");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy is called");
  }
}
