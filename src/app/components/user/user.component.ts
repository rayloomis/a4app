import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
// 35.11
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;

  constructor() { 
    console.log('constructor ran. . .');
  }

  ngOnInit() {
    console.log('ngOnInit ran. . .');

    this.name = "John Doe";
    this.age = 30;
    this.address = {
      street:"50 Main St",
      city:"Boston",
      state:"MA"
    }
    this.hobbies = ['Write Code', 'Watch movies', 'Listen to music'];
    this.hello = 'hello';
    this.hello = 1;
  }

}

interface Address{
  street:string,
  city:string,
  state:string
}
