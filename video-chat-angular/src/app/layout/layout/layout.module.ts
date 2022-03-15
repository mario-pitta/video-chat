import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from "src/app/components/header/header.component";
import { SidebarComponent } from "src/app/components/sidebar/sidebar.component";
import { PagesModule } from "src/app/pages/pages.module";
import { SocketService } from "src/app/services/socket/socket.service";
import { LayoutRoutingModule } from "./layout-routing.module";
import { LayoutComponent } from "./layout.component";

@NgModule({
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent],
    imports: [LayoutRoutingModule, PagesModule, FormsModule, ReactiveFormsModule, CommonModule],
    schemas: [],
    providers: [SocketService],
    exports: [LayoutComponent, PagesModule]
})
export class LayoutModule{

}