// // Single Responsibility

// class User {
//     firstName: string;
//     lastName: string;
//     address: string;

//     constructor(firstName: string, lastName: string, address: string,
//     ){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.address = address;
//     }

//     getDetails(){
//         console.log(`${this.firstName} ${this.lastName} is from ${this.address} `);
        
//     }
// }

// class Wallet {
//     balance: number;
//     currency: string;

//     constructor(balance: number, currency: string){
//         this.balance = balance;
//         this.currency = currency;
//     }

//     saveMoney(){

//     }

//     removeMoney(){

//     }
// }

// interface Address {
//     str: string;
//     country: string;
// }

// interface WalletDetails {
//     type: string;
//     balance: number;
//     currency: string;
// }
// interface PersonPrivateDetails {
//     firstName: string;
//     lastName: string;
// }

// interface PersonPublicDetails extends PersonPrivateDetails, WalletDetails {
    
//     address: Address;
    


// class Person implements PersonPrivateDetails {
//     firstName: string;
//     lastName: string;

//     constructor(firstName: string, lastName: string){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

// }
// Dependency Inversion is the RULE
// Dependency Injection --> realization of the rule (Design Pattern)

class Wallet {
    balance = 0;
    currency = 'EUR';

    constructor(balance: number, currency: string){
        this.balance = balance;
        this.currency = currency;
    }
}

class Car {
    model: string;
    make: string;
    color: string;

    constructor(model: string, make: string, color: string){
        this.model = model;
        this.make = make;
        this.color = color;
    }
}

// WORST PRACTICE

class User {
    name: string;
    wallet: Wallet;
    car: Car;

    constructor(name: string, wallet: Wallet, car: Car){
        this.name = name;
        this.wallet = wallet
        this.car = car;
    }
}
const peshosWallet = new Wallet(500, 'EUR')
const peshosCar = new Car('VW', 'Polo', 'blue')
const userPesho = new User('Pesho', peshosWallet, peshosCar);

const mariasWallet = new Wallet(400, 'EUR');
const mariasCar = new Car('Mercedes', 'AMG', 'black');
const userMaria = new User('Maria', mariasWallet, mariasCar);