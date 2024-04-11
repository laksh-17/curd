import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent implements OnInit {

  Form :FormGroup;
  id:number =0;

  constructor(private fb:FormBuilder,public router:Router,private service : ContactService,
    private dialogRef: MatDialogRef<AddComponent>
  ){

    this.Form = this.fb.group({
      firstName:[""],
      lastName:[""],
      email:[""],
      phoneNumber:[""],
      address:[""],
      city:[""],
      state:[""],
      country:[""],
      postalCode:[""],
      
    })

  }

  ngOnInit(): void {
    
  }



  onSubmit() {
    console.log(this.Form.value)
    this.service.createContact(this.Form.value).subscribe(res=>{
      this.Form.setValue({

        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:"",
        address:"",
        city:"",
        state:"",
        country:"",
        postalCode:"",

      })
    });
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
