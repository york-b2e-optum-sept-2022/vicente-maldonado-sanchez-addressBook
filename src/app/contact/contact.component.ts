import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IContact} from "../Interfaces/IContact";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() contact!:IContact;
  @Output() onContactDelete = new EventEmitter<IContact>();
  localContact!: IContact;
  isUpdating:boolean = false;
  constructor() { }

onUpdateClick() {
  this.isUpdating=true;
}

onSaveClick() {
    this.isUpdating = false;
  this.localContact= {...this.contact}
    console.log('Data Saved')
}

onCancelClick() {
  this.contact={...this.localContact}

    this.isUpdating = false;
    console.log('update Canceled')
}
onDeleteClick() {
    this.onContactDelete.emit(this.localContact);
}

  ngOnInit(): void {
    this.localContact= {...this.contact}
  }

}
