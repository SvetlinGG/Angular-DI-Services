import { Injectable } from '@angular/core';
import { ComplexUser, SimpleUser} from '../types';
import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class UserService {
  URL = 'https://jsonplaceholder.typicode.com/users';

  appUsers: ComplexUser[] = [];

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<ComplexUser[]>(this.URL);
  }

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

