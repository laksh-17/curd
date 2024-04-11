import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact} from '../model/ui.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }


  getContact(){
    return this.http.get<Contact[]>('https://localhost:7091/api/Contact/userdetails');
  }

  createContact(data:Contact){
    data.id =0;
    return this.http.post<Contact[]>('https://localhost:7091/api/Contact/create',data);
  }

  updateContact(id:number,data:Contact){
    return this.http.put<Contact[]>('https://localhost:7091/api/Contact/update/'+id,data);
  }

  deleteContact(id:number){
    return this.http.delete<Contact[]>('https://localhost:7091/api/Contact/delete/'+id);
  }

  authenitication() {
    return this.http.get<any[]>('https://localhost:7091/api/Contact/authentication');
  }


}
