import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [ContactService]
})

export class ContactListComponent implements OnInit {

  contacts: Contact[]
  selectedContact: Contact

  constructor(private contactService: ContactService) { }

  ngOnInit() {
     this.contactService
      .getContacts()
      .then((contacts: Contact[]) => {
        this.contacts = contacts.map((contact) => {
          if (!contact.phone) {
            contact.phone = {
              mobile: '',
              work: ''
            }
          }
          return contact;
        });
      });
  }

  selectContact(contact: Contact) {
    this.selectedContact = contact
  }

  createNewContact() {
    var contact: Contact = {
      name: '',
      email: '',
      phone: {
        work: '',
        mobile: ''
      }
    };

    // By default, a newly-created contact will have the selected state.
    this.selectContact(contact);
  }

  deleteContact(contactId: String) {
    var idx = this.contacts.findIndex((c) => {
      return c._id === contactId;
    });
    if (idx !== -1) {
      return this.contacts.splice(idx, 1);
    }
    return this.contacts;
  }

  addContact(contact: Contact) {
    this.contacts.push(contact)
    return this.contacts;
  }

  updateContact(contact: Contact) {
    for (let i in this.contacts) {
      if (this.contacts[i]._id === contact._id) {
        this.contacts[i] = contact;
      }
    }
    return this.contacts;
  }
}