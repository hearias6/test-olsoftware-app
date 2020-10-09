import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  error : boolean = false;
  message : String = ''

  constructor(
    private formBuilder : FormBuilder,
    private _userService : UserService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  get username(){
    return this.loginForm.get('username');
  }

  get password(){
    return this.loginForm.get('password');
  }

  logout(){
    console.log('logout');
    console.log(this.loginForm.value);
    let data = this._userService.getUserByUsername(this.username.value);
    if (data == undefined ) {
      this.error = true;
      this.message = 'Usuario No esta registrado en la base de datos';
    } else {
      if (data.password == this.password.value) {
        sessionStorage.setItem('user', JSON.stringify(data));
        this.router.navigate(['users']);
      } else {
        this.error = true;
        this.message = 'Por favor validar las credenciales';
      }
    }
  }

}
