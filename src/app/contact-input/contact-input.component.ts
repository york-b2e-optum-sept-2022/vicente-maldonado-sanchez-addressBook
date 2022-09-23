import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IContact} from "../Interfaces/IContact";

@Component({
  selector: 'app-contact-input',
  templateUrl: './contact-input.component.html',
  styleUrls: ['./contact-input.component.css']
})
export class ContactInputComponent implements OnInit {
 date= new Date()
  @Output() onCancel = new EventEmitter<undefined>();
  contact: IContact = {
  id : this.date.getTime(),
  name: '',
  address: '',
  phoneNumber: '',
  email: '',
  birthday: new Date(),
  meetDate: new Date(),
  relation: '',
  company: '',
  notes: ''
}
@Output() newContact = new EventEmitter<IContact>();
  @Output() onCreateNew = new EventEmitter<undefined>();


  constructor() { }

 onSubmit(){
    this.newContact.emit(this.contact)
   this.onCreateNew.emit();
  }

  onCancelClick(){
    this.onCancel.emit();

  }

  ngOnInit(): void {
  }

}
