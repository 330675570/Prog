import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  @Input() name: string | undefined
  @Input() email: string | undefined
  @Input() phone: string | undefined
  @Input() birthofdate: Date | undefined

  editContact() {
    console.log('לחצת על עריכה');
  }
  deleteContact() {
    console.log('לחצת על מחיקה');
  }
}
