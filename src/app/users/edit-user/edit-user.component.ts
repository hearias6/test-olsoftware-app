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
      id : ['', Validators.required],
      nombres : ['', Validators.required],
      apellidos : ['', Validators.required],
      identificacion : ['', Validators.required],
      rol : ['', Validators.required],
      estado : ['', Validators.required],
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

  update(){
    this.userService.editUser(this.id.value, this.userForm.value);
    this.bsModalRef.hide();
  }

  setUserForm(){
    this.id.setValue(this.user.id);
    this.password.setValue(this.user.password);
    this.nombres.setValue(this.user.nombres);
    this.apellidos.setValue(this.user.apellidos);
    this.identificacion.setValue(this.user.identificacion);
    this.correo.setValue(this.user.correo);
    this.telefono.setValue(this.user.telefono);
    this.estado.setValue(this.user.estado);
    this.rol.setValue(this.user.rol);
  }

  cancel(){
    this.bsModalRef.hide();
  }  

}
