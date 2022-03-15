import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { bootstrap } from 'bootstrap'
import { LayoutModule } from './layout/layout/layout.module';
import { TextChatComponent } from './pages/text-chat/text-chat.component';
import { SocketService } from './services/socket/socket.service';
import * as io  from 'socket.io-client'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    LayoutModule,
    HttpClientModule,
  ],
  providers: [SocketService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
