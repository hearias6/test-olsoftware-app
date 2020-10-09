import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : [] = [];
  user : any  = {}
  showEdit : boolean = false;

  constructor(
    private userService : UserService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.users = this.userService.getUsers();
  }
  
  selectedUser(data){
    console.log('selected user ', data);
    this.user = data;
    console.log('user: ', this.user);
    this.showEdit = true;
  }

  clearUserEditEvent($event){
    console.log('clearUserEditEvent ', $event);
    this.user = $event;
    this.showEdit = false;
  }

  deleteUser(id){
    console.log('delete user : ', id);
    if (id != undefined){
      this.userService.deleteUser(id);
    }
    
  }

}
