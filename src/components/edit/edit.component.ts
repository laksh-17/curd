import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {

  Form :FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA)public data: any, private fb:FormBuilder,public router:Router,private service : ContactService,private route:ActivatedRoute,
  private dialogRef: MatDialogRef<EditComponent>){

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
    

    this.Form.setValue({

      firstName:this.data.firstName,
      lastName:this.data.lastName,
      email:this.data.email,
      phoneNumber:this.data.phoneNumber,
      address:this.data.address,
      city:this.data.city,
      state:this.data.state,
      country:this.data.country,
      postalCode:this.data.postalCode,

    })
   

  }


  saveChanges(){

    this.service.updateContact(this.data.id,this.Form.value).subscribe(c=>{
      console.log(c)
      this.router.navigateByUrl('/main/homePage')
      this.service.getContact().subscribe(data=>console.log(data));
      this.closeDialog()
    })
  }


  closeDialog() {
    this.dialogRef.close();
  }

}
