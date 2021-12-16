import { Component } from '@angular/core';
import { Address, Todo } from './addressModel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'samplproject';
  displayvariable = 'Hello ';
  imageurl = '../assets/Sample.jpg';

  addressModel: Address = new Address();
  TodoModel: Todo = new Todo();
  display() {
    alert();
  }

  constructor(public httpc: HttpClient) {}

  GetPosts() {
    this.httpc.get('https://sample.com/111').subscribe(
      (res) => this.Success(res),
      (res) => this.Error(res)
    );
  }

  Success(res: any) {
    this.TodoModel=res;
  }
  Error(res: any) {
    console.log(res);
  }
}
