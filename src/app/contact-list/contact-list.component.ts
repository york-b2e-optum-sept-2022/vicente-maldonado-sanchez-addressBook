import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IContact} from "../Interfaces/IContact";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
@Input() list!: IContact[];
@Output() newContact = new EventEmitter<undefined>();

  constructor() {

  }
  onClick() {
    console.log('give')
    this.newContact.emit()}


  ngOnInit(): void {
    console.log(this.list)
  }

}
