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
    set firstName(firstName){ this._firstName = firstName; }

    toString(){
        return "\nfirstName : "+this.firstName+"\nlastName : "+this.lastName+"\naddress : "+this.address+
        "\ncity : "+this.city+"\nstate : "+this.state+"\nzip-code : "+this.zip+"\nphoneNumber : "+this.phoneNumber+"\nEmail-Id : "+this.email;
    }
}
let addressBook = new AddressBook("Saurabh","Kodam","Savedi","Ahmednagar","Maharashtra",414003,8329294765,"saurabhkodam@gmail.com");
console.log(addressBook.toString());