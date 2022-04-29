class text{
    firstName:string;
    lastName:string;
    age:number;

    constructor (firstName:string ,lastName:string ,age:number){
        this.firstName =firstName;
        this.lastName = lastName ;
        this.age = age;

    }

    getFirstname(){
        console.log("myfirstname is " + this.firstName + " "+ this.lastName);
    }
    getLastname(){

    }
}

let obj = new text("de","msam");

obj.getFirstname();