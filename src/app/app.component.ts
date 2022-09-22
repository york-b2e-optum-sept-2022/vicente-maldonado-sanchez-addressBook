import { Component } from '@angular/core';
import {IAccount} from "./Interfaces/IAccount";
import {IContact} from "./Interfaces/IContact";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  accountList: IAccount[] = [
    {username: 'admin',
  password: 'admin'}
  ]
  isLoggedIn: Boolean = true;
  contactList: IContact[] = [
    {id:0,
      name: 'contact 1',
      address: "123 main st.",
      birthday: new Date(),
      meetDate: new Date(),
      company: 'York Solutions',
      email: 'test@test',
      notes: 'cool person',
      phoneNumber: '123-456-7890',
      relation: 'friend'}
  ]

  onLogin (loginCreds: IAccount) {

    const foundAccount=this.accountList.find((account: IAccount) => {
      console.log(account.username);
      console.log(loginCreds.username);
      return account.username === loginCreds.username
        && account.password === loginCreds.password
    });
    if (foundAccount === undefined) {
      console.log('invalid login')
    }
    this.isLoggedIn=true

  }


  title = 'address-book';
}
