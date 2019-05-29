import { Component, OnInit } from '@angular/core';

import { User, UserService } from './user.service';

@Component({
  selector: 'app-root1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent1 implements OnInit {
  title = 'Users list';
  users: User[];
  rand: number;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.rand = this.userService.random;
  }

}
