import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { emit } from 'process';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user : any = {};
  userForm : FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private userService : UserService,
    public bsModalRef: BsModalRef
  ) { 
  }

  ngOnInit(): void {
    this.createFormUser();
    this.setUserForm();
  }

  createFormUser(){
    console.log('createFormUser');
    this.userForm = this.formBuilder.group({
      id : [''],
      username : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  get username(){
    return this.userForm.get('username');
  }

  get password(){
    return this.userForm.get('password');
  }

  get id(){
    return this.userForm.get('id');
  }

  update(){
    this.userService.editUser(this.userForm.get('id').value, this.userForm.value);
    this.bsModalRef.hide();
  }

  setUserForm(){
    this.id.setValue(this.user.id);
    this.username.setValue(this.user.username);
    this.password.setValue(this.user.password);
  }

}
