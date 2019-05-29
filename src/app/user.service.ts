import { Injectable,OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnInit {

 random :number;

  constructor() {
    this.random = Math.random( );
   }
  ngOnInit() {
  
  }
}
