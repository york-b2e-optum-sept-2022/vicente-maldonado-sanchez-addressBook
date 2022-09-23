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
  isLoggedIn: boolean = true;
  isCreating: boolean = false;
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
      return account.username === loginCreds.username
        && account.password === loginCreds.password
    });
    if (foundAccount === undefined) {
      console.log('invalid login')
    }
    this.isLoggedIn=true

  }
  newContact() {
  this.isCreating=true;
  }

  cancelCreate() {
    this.isCreating=false;
  }

  addContact(contact: IContact) {
    this.contactList.push(contact);
    console.log(this.contactList);

  }

  title = 'address-book';
}
