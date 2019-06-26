import { Component } from '@angular/core';
import {FB} from 'fb'; // or,

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-fb';

  // login() {
  //   FB.getLoginStatus(r => {
  //     console.log(r);
  //   })
  // }


}
