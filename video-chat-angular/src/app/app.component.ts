import { Component } from '@angular/core';
import { SocketService } from './services/socket/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'video-chat-angular';

  constructor(private socketService: SocketService){}

  ngOnInit() {
    this.socketService.connectWS()
  }

}
