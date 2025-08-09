export interface User{
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": Address,
    "phone": "010-692-6593 x09125",
    "website": string,
    "company": Company
  }
  export interface Address {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": "90566-7771",
    "geo": Geo
  }
  export interface Geo {
    "lat": string,
    "lng": string
  }
  export interface Company {
    "name": string,
    "catchPhrase": string,
    "bs": string
  }