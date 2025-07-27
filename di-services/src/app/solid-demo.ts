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

interface PersonPublicDetails {
    person: PersonPrivateDetails;
    address: Address;
    wallet: WalletDetails;


class Person implements PersonPublicDetails {}
