import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  Router, RouterOutlet } from '@angular/router';
import { Contact } from '../model/ui.model';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import {MatDialogModule,MatDialog} from '@angular/material/dialog'; 
import { AddComponent } from '../components/add/add.component';
import { OrderbyPipe } from "../pipe/orderby.pipe";
import { HomeComponent } from '../components/home/home.component';
import { ContactService } from '../services/contact.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeComponent, AddComponent,CommonModule, FormsModule, NavbarComponent, FooterComponent, MatDialogModule, OrderbyPipe]
})
export class AppComponent implements OnInit {
  title = 'curd'; 
  contacts: any[] = []; // Array to hold contact data
 
  constructor(public router:Router,private dialogRef:MatDialog,private authService:ContactService){
    

  }

  sortKey: string = 'Id'; // Initial sort key
  reverse: boolean = false; // Initial sort order

  sort(key: string) {
    this.sortKey = key;
    this.reverse = !this.reverse;
  }

   ngOnInit(): void {
  
  
      this.authService.authenitication().subscribe((response :any)  => {
        // Store token in local storage or cookie
        localStorage.setItem('token', response.token);
        // Redirect or perform further actions
      });
  

  }

  addContact(){
    this.dialogRef.open(AddComponent)
  }


  // deleteContact(){
  //   this.dialogRef.open(DeleteComponent)
  // }
    
// editContact(){
//   this.dialogRef.open(EditComponent)
// }


  


}
