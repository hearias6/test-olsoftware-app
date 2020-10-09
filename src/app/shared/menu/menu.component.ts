import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  userLogin : any = {}

  constructor(
    private rotuer : Router
  ) {
    this.loadUser();
   }

  ngOnInit(): void {
    
  }

  loadUser(){
    let user  = JSON.parse(sessionStorage.getItem('user'));
    console.log('user logout : ', user);
    this.userLogin = user;
    console.log('user : ', this.userLogin);
  }

  cerrarSesion(){
    sessionStorage.clear();
    this.rotuer.navigate(['/'])
  }

}
