import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { UserModule} from './user.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  title = 'Users list';
  users: User[];
  rand: number;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
    this.rand = this.userService.random;
  }

}
