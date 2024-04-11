import { Component, Inject } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent {

  contacts: any[] = [];
  constructor(private service :ContactService,@Inject(MAT_DIALOG_DATA)public data: any,private dialogRef: MatDialogRef<DeleteComponent>){

  }

  deleteContact(){
      this.service.deleteContact(this.data).subscribe(c=>{
        console.log("Deleted Successfully",c);
  
      })
       
    }
    
  
    closeDialog() {
      this.dialogRef.close();
    }
  

}
