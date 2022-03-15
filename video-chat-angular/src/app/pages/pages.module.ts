import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SocketService } from "../services/socket/socket.service";
import { HomeComponent } from "./home/home.component";
import { TextChatComponent } from "./text-chat/text-chat.component";


@NgModule({
    declarations: [HomeComponent, TextChatComponent],
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
    exports: [HomeComponent, TextChatComponent],
    providers: [SocketService]
})
export class PagesModule{}