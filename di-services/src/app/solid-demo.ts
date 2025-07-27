// Single Responsibility

class User {
    firstName: string;
    lastName: string;
    address: string;

    constructor(firstName: string, lastName: string, address: string,
    ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
    }

    getDetails(){
        console.log(`${this.firstName} ${this.lastName} is from ${this.address} `);
        
    }
}

class Wallet {
    balance: number;
    currency: string;

    constructor(balance: number, currency: string){
        this.balance = balance;
        this.currency = currency;
    }

    saveMoney(){

    }

    removeMoney(){

    }
}

interface Address {
    str: string;
    country: string;
}

interface WalletDetails {
    type: string;
    balance: number;
    currency: string;
}
interface PersonPrivateDetails {
    firstName: string;
    lastName: string;
}

interface PersonPublicDetails extends PersonPrivateDetails, WalletDetails {
    
    address: Address;
    


class Person implements PersonPrivateDetails {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

}
// Dependency Inversion is the RULE
// Dependency Injection --> realization of the rule (Design Pattern)