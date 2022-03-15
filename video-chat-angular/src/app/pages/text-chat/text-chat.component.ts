import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SocketService } from 'src/app/services/socket/socket.service';

@Component({
  selector: 'app-text-chat',
  templateUrl: './text-chat.component.html',
  styleUrls: ['./text-chat.component.scss']
})
export class TextChatComponent implements OnInit {
  messages: any[] = []
  msg: string
  usuario: {
    nome: string,
    photo: string,
    id: string
  } = {
      nome: "",
      photo: './assets/user_image.png',
      id: ""
    }
  constructor(private ws: SocketService, private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    

    this.ws.messages.subscribe((message) => {
      this.messages.push(message)
      console.log(this.messages)
    })
  }

  changeUserImage(event: any) {
    let img = event.target.files[0]
    let reader = new FileReader();
    let that = this
    reader.onload = () => {
      that.usuario.photo = reader.result.toString()
    }

    reader.readAsDataURL(img)
  }

  sendMessage() {
    this.usuario.id=this.ws.socket.id
    let obj = {
      message: this.msg,
      user: this.usuario
    }

    this.ws.sendMessage(obj)
    this.msg = ""
  }

  sanitize(string: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(string)
  }

}
