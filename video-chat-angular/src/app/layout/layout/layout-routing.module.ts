import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { LayoutComponent } from './layout.component';

const ROUTES: Routes = [
    { path: '', component: HomeComponent }
]
@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }