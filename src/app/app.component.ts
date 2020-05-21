import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dev1';
  UserName:string;
  Password:string;
  validateUser()
  {
    if (this.UserName=="Admim"&&this.Password=="Admin") 
      {
    alert("validate user");
  }
  else
  {
    alert("invalid user");
  }
  }
}
