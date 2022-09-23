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
@Output() deleteContat = new EventEmitter<IContact>();

  constructor() {

  }
  onClick() {
    this.newContact.emit()}

  deleteThis(contact: IContact) {
    console.log('Delete This')
   this.deleteContat.emit(contact)

  }

  ngOnInit(): void {
  }

}
