import { Component } from '@angular/core';
//import (ContactsPlugin) from 'contacts-plugin';
import 'contacts-plugin';
import { ContactsPlugin } from 'contacts-plugin';

//const { ContactsPlugin } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contacts: any[] = [];

  constructor() {}

  async loadContacts() {
    this.contacts = (await ContactsPlugin.getContacts('')).results;
    console.log('my contacts: ', this.contacts);
  }
}
