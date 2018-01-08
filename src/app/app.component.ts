import { Component } from '@angular/core';
//dunebook
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  constructor() {
    this.title = 'Crypto Dashboard';
  }
}