import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IAccount} from "../Interfaces/IAccount";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
 export class LoginComponent implements OnInit {
  username!:string
  password!: string
  @Output() onLogin = new EventEmitter<IAccount>();


  constructor() { }

  ngOnInit(): void {
  }

  onLoginClick(){
  this.onLogin.emit( {
    username: this.username,
    password: this.password
  })

  }

}
