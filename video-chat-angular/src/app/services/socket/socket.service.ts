import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import * as io from 'socket.io-client';

const ws_url: string = 'http://localhost:5000'

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: io.Socket
  messages$: Subject<any> = new Subject
  messages: Observable<any> = this.messages$.asObservable().pipe(tap((m) => m))
  constructor() { }
  connectWS() {
    this.socket = io.io(ws_url)
    this.socket.on('message', (message) => {
      this.messages$.next(message)
    })
  }
  sendMessage(msg: any) {
    console.log(this.socket)
    this.socket.emit("message", msg)
  }
}
