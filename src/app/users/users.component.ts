import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UserService } from '../services/user.service';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : [] = [];
  user : any  = {}
  userId : number = -1;
  message: string;

  bsModalRef: BsModalRef;
  constructor(
    private userService : UserService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.users = this.userService.getUsers();
  }
  
  openModalAddUser() {
    this.bsModalRef = this.modalService.show(AddUserComponent);
    this.bsModalRef.content.closeBtnName = 'Close';  
  }

  selectedUser(data){
    this.user = data;
    this.openModalEditUser();
  }

  openModalEditUser(){
    console.log('openModelEditUser');
    const initialState = {
      user : this.user
    };
    this.bsModalRef = this.modalService.show(EditUserComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';  
  }

  openModalDeleteUser(template: TemplateRef<any>, id) {
    this.userId = id;
    this.bsModalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  confirm(): void {
    this.message = 'Confirmed!';
    this.deleteUser();
    this.bsModalRef.hide();
  }
 
  decline(): void {
    this.message = 'Declined!';
    this.bsModalRef.hide();
  } 

  deleteUser(){
    this.userService.deleteUser(this.userId);
  }

}
