import { Injectable } from '@angular/core';
import { SimpleUser } from '../types';

// @Injectable({
//   providedIn: 'root'
// })
export class UserService {
  appUsers: SimpleUser[] = [
    {name: 'Max', age: 31},
    {name: 'Anna', age: 30},
    {name: 'Chris', age: 29}
  ];

  constructor() { }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement){

    const user = {
      name: inputName.value, 
      age: Number(inputAge.value),
    };

    this.appUsers.push(user);
    // this.appUsers = [...this.appUsers, user]; !IMPORTANT HACK
    inputName.value = '';
    inputAge.value = '';
    
    console.log(this.appUsers);
    
  }
}

