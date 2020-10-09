import { Injectable } from '@angular/core';
import listUsers from 'src/assets/json/users.json'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(){
    return listUsers;
  }

  getUserByUsername(username){
    console.log('getUserByUsename ', username);
    let data = listUsers.find(user=>user.identificacion==username);
    console.log('data : ', data);
    return data;
  }

  addUser(user){
    user.id = listUsers.length + 1;
    this.insertFirtsList(0, user);
  }

  editUser(id, userEdit){
    let index = this.getIndexList(this.getItemById(id));
    console.log('index : ', index);
    if(index != -1){
      listUsers[index] = userEdit;
    }
  }

  deleteUser(id){
    console.log('delete user ', id);
     let index = this.getIndexList(this.getItemById(id));
     listUsers.splice(index,1);
     console.log('index : ', index);
  }

  getItemById(id){
    return listUsers.find(item=>item.id ==id);
  }

  getIndexList(item){
    return listUsers.indexOf(item);
  }

  // methods helps..
  insertFirtsList(index, item){
    listUsers.splice(index, 0, item);
  }

}
