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
      nombres : ['', Validators.required],
      apellidos : ['', Validators.required],
      identificacion : ['', Validators.required],
      rol : ['administrador', Validators.required],
      estado : ['activo', Validators.required],
      telefono : ['', Validators.required],
      correo : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  get nombres(){
    return this.userForm.get('nombres');
  }

  get apellidos(){
    return this.userForm.get('apellidos');
  }
  get identificacion(){
    return this.userForm.get('identificacion');
  }
  get rol(){
    return this.userForm.get('rol');
  }
  get estado(){
    return this.userForm.get('estado');
  }
  get telefono(){
    return this.userForm.get('telefono');
  }
  get correo(){
    return this.userForm.get('correo');
  }

  get password(){
    return this.userForm.get('password');
  }

  get id(){
    return this.userForm.get('id');
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
