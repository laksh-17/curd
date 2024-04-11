import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OrderbyPipe } from "../../pipe/orderby.pipe";
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../model/ui.model';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from '../add/add.component';
import { EditComponent } from '../edit/edit.component';
import { response } from 'express';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [FormsModule, CommonModule, OrderbyPipe, AddComponent]
})
export class HomeComponent implements OnInit {

  title = 'CURD';
  contacts: any[] = []; // Array to hold contact data


  constructor(public router: Router, private service: ContactService, private dialog: MatDialog, private route: ActivatedRoute) {


  }

  sortKey: string = 'Id'; // Initial sort key
  reverse: boolean = false; // Initial sort order

  sort(key: string) {
    this.sortKey = key;
    this.reverse = !this.reverse;
  }

  ngOnInit() {

    this.service.getContact().subscribe((res) => {
      console.log(res)
      this.contacts = res.reverse();
    })
  }



  addContact() {
    this.dialog.open(AddComponent, {
      width: '500px'
    });
  }


  deleteContact(id: number) {

    this.service.getContact().subscribe(response => {
      const contact = response.find(c => c.id === id);
      this.dialog.open(DeleteComponent, {
        width: '300px',
        data: contact?.id
      });
    })


  }

  editContact(data: number) {

    this.service.getContact().subscribe(response => {
      const contact = response.find(c => c.id === data);


      this.dialog.open(EditComponent, {
        width: '500px',
        data: contact
      });

    })
  }


}
