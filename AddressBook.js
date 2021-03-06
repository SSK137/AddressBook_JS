console.log("Welcome to Address Book System Using Java Script");
class AddressBook{
   

    constructor(firstName, lastName, address,city,state,zip,phoneNumber,email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    get firstName(){ return this._firstName; }
    set firstName(firstName){ 
    let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(firstNameRegex.test(firstName))
         this._firstName = firstName;
    else
    throw('First Name is Incorrect!');  }

    get lastName(){ return this._lastName; }
    set lastName(lastName){ 
    let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(lastNameRegex.test(lastName))
         this._lastName = lastName;
    else
    throw('Last Name is Incorrect!'); }

    get address(){ return this._address; }
    set address(address){ 
    let addressRegex = RegExp('^[A-Za-z]{4,}$');
    if(addressRegex.test(address))
         this._address = address;
    else
    throw('Address is Incorrect!'); 
     }

    get city(){ return this._city; }
    set city(city){ 
    let cityRegex = RegExp('^[A-Za-z]{4,}$');
    if(cityRegex.test(city))
         this._city = city;
    else
    throw('city is Incorrect!'); 
     }

    get state(){ return this._state; }
    set state(state){ 
    let stateRegex = RegExp('^[A-Za-z]{4,}$');
    if( stateRegex.test(state))
         this._state =state;
    else
    throw(' state is Incorrect!'); 
     }

    get zip(){ return this._zip; }
    set zip(zip){ 
    let zipRegex =RegExp('^[0-9]{6}$');
    if(zipRegex.test(zip))    
        this._zip = zip; 
    else
    throw ('Zip code is Incorrect!');
    }
    get phoneNumber(){ return this._phoneNumber; }
    set phoneNumber(phoneNumber){ 
    let phoneNumberRegex =RegExp('^[0-9]{2}\\s{0,1}[0-9]{10}$');
    if(phoneNumberRegex.test(phoneNumber))    
        this._phoneNumber = phoneNumber; 
    else
        throw ('Phone Number is Incorrect!');
    }
    get email(){ return this._email; }
    set email(email){ 
    let emailRegex =RegExp('^[a-z0-9.]+@[a-z]+\.[a-z]{2,3}$');
    if(emailRegex.test(email))    
        this._email = email; 
    else
        throw ('Email is Incorrect!');
    }
  
    toString(){
        return "\nfirstName : "+this.firstName+"\nlastName : "+this.lastName+"\naddress : "+this.address+
        "\ncity : "+this.city+"\nstate : "+this.state+"\nzip-code : "+this.zip+"\nphoneNumber : "+this.phoneNumber+"\nEmail-Id : "+this.email;
    }
}
try{
let addressBook = new AddressBook("Saurabh","Kodam","Savedi","Ahmednagar","Maharashtra",414003,918329294765,"saurabhkodam@gmail.com");
console.log(addressBook.toString());
}
catch(e){
    console.error(e);

}
//First Name
try{
    let addressBook = new AddressBook("Saurabh","Kodam","Savedi","Ahmednagar","Maharashtra",414003,918329294765,"saurabhkodam@gmail.com");
    console.log(addressBook.toString());
    }
    catch(e){
        console.error(e);
    
    }
//Last Name
try{
    let addressBook = new AddressBook("Saurabh","Kodam","Savedi","Ahmednagar","Maharashtra",414003,918329294765,"saurabhkodam@gmail.com");
    console.log(addressBook.toString());
    }
    catch(e){
            console.error(e);
        
    }
//Address    
try{
    let addressBook = new AddressBook("Saurabh","Kodam","Savedi","Ahmednagar","Maharashtra",414003,918329294765,"saurabhkodam@gmail.com");
    console.log(addressBook.toString());
    }
    catch(e){
        console.error(e);
    
    }
//city    
try{
    let addressBook = new AddressBook("Saurabh","Kodam","Savedi","Ahmednagar","Maharashtra",414003,918329294765,"saurabhkodam@gmail.com");
    console.log(addressBook.toString());
    }
    catch(e){
        console.error(e);
    
    }
//state    
try{
    let addressBook = new AddressBook("Saurabh","Kodam","Savedi","Ahmednagar","Maharashtra",414003,918329294765,"saurabhkodam@gmail.com");
    console.log(addressBook.toString());
    }
    catch(e){
        console.error(e);
    
    }
//Zip Code    
try{
    let addressBook = new AddressBook("Saurabh","Kodam","Savedi","Ahmednagar","Maharashtra",414003,918329294765,"saurabhkodam@gmail.com");
    console.log(addressBook.toString());
    }
    catch(e){
        console.error(e);
    
    }
//Phone Number
try{
    let addressBook = new AddressBook("Saurabh","Kodam","Savedi","Ahmednagar","Maharashtra",414003,918329294765,"saurabhkodam@gmail.com");
    console.log(addressBook.toString());
    }
    catch(e){
        console.error(e);
    
    }
//Email    
try{
    let addressBook = new AddressBook("Saurabh","Kodam","Savedi","Ahmednagar","Maharashtra",414003,918329294765,"saurabhkodam@gmail.com");
    console.log(addressBook.toString());
    }
    catch(e){
        console.error(e);
    
    }
    