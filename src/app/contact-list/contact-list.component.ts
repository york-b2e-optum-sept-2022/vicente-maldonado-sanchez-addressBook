import {Component, Input, OnInit} from '@angular/core';
import {IContact} from "../Interfaces/IContact";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
@Input() list!: IContact[];
  constructor() {

  }

  ngOnInit(): void {
    console.log(this.list)
  }

}
