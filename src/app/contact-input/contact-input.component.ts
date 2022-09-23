import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IContact} from "../Interfaces/IContact";

@Component({
  selector: 'app-contact-input',
  templateUrl: './contact-input.component.html',
  styleUrls: ['./contact-input.component.css']
})
export class ContactInputComponent implements OnInit {

  @Output() onCancel = new EventEmitter<undefined>();
  contact: IContact = {
  id : -1,
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


  constructor() { }

 onSubmit(){
    console.log(this.contact)
  }

  onCancelClick(){
    this.onCancel.emit();

  }

  ngOnInit(): void {
  }

}
