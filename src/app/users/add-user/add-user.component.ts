import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm : FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private userService : UserService,
    public bsModalRef: BsModalRef
  ) { 

  }

  ngOnInit(): void {
    this.createFormUser();
  }

  createFormUser(){
    this.userForm = this.formBuilder.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  save(){
    this.userService.addUser(this.userForm.value);
    this.userForm.reset();
    this.bsModalRef.hide();
  }

  cancel(){
    this.bsModalRef.hide();
  }

}
