import { Routes } from '@angular/router';
import { AddComponent } from '../components/add/add.component';
import { HomeComponent } from '../components/home/home.component';
import { EditComponent } from '../components/edit/edit.component';
import { DeleteComponent } from '../components/delete/delete.component';


export const routes: Routes = [
    {path:'main/homePage',component:HomeComponent},
    {path:'add',component:AddComponent},
    {path:'delete',component:DeleteComponent},
    { path: '', redirectTo: 'main/homePage', pathMatch: 'full' }
];
