import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emit } from 'process';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userForm : FormGroup;
  @Input() userData : any;
  @Output() clearUserEdit = new EventEmitter<any>(); 

  constructor(
    private formBuilder : FormBuilder,
    private userService : UserService
  ) { 
    this.createFormUser();
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('change ..');
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

  // set user to form
  setUserForm(){
    this.username.setValue(this.userData.username);
    this.password.setValue(this.userData.password);
    this.id.setValue(this.userData.id);
  }

  update(){
    this.userService.editUser(this.userData.id, this.userForm.value);
    this.onClearUserEdit();
  }

  onClearUserEdit(){
    console.log('onClearUserEdit ');
    this.clearUserEdit.emit({});
  }

}
