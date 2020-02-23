//object literal

const salon ={
    name:"The Fashion Pet",
    phone:"3255-78934",
    address:{
        street:"Main Street",
        number:"345"
    },
    workingHours:{
        days:"Mon-Fri",
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[]
}

console.log(salon);
//let name = salon.name;

let {name,phone,address:{street,number},workingHours:{days,open,close}}= salon;

//object constructor

class Pet{
    constructor(name,age,gender,breed,service,ownerName,ownerContact){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.service=service;
        this.ownerName=ownerName;
        this.ownerContact=ownerContact;
        this.hunger=10;
        this.happiness=5;
    }
    ownerInfo = function() {
        console.log("Owner Name: " + this.ownerName + "\n" + "Contact Phone: " + this.ownerContact);
        
    }
    feed = function(){
        this.hunger-=5;
        this.happiness+=5;
        console.log("Feeding...");
    }
    status = function(){
        console.log("Hunger: "+ this.hunger + "\n" + "Happiness:" + this.happiness);
    }
}

const pet1 = new Pet("Shaggy",2,"male","boxer","Shower","Samantha","789456123");
const pet2 = new Pet("Janis",3,"Female","boxer","Haircut","Sabrina","753159852");
const pet3 = new Pet("Scooby",6,"Male","Mixed","Shower","Omar","456123789");

pet1.ownerInfo();
pet2.ownerInfo();
pet3.ownerInfo();

console.log(pet1);
console.log(pet2);
console.log(pet3);

pet1.status();
pet1.feed();
pet1.status();

salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);

var textname=document.getElementById('txtname');
var textage=document.getElementById('txtage');
var textgender=document.getElementById('txtgender');
var textbreed=document.getElementById('txtbreed');
var textservice=document.getElementById('txtservice');
var textowner=document.getElementById('txtOname');
var textcontact=document.getElementById('txtcontact');


function register(){
    const thePet = new Pet(textname.value,textage.value,textgender.value,textbreed.value,textservice.value,textowner.value,textcontact.value);
    salon.pets.push(thePet);
    alert("You registered a new pet.");
    clear();
    function display(thePet){
        var tbody = document.getElementById('rowPet');
    
        var row = `<tr>
                        <td> ${thePet.name} </td>
                        <td> ${thePet.age} </td>
                        <td> ${thePet.gender} </td>
                        <td> ${thePet.breed} </td>
                        <td> ${thePet.service} </td>
                        <td> ${thePet.ownerName} </td>
                        <td> ${thePet.ownerContact} </td>
                    </tr>`;
        tbody.innerHTML+=row;
    }
    display(thePet);
}

function clear(){
    textname.value ="";
    textage.value ="";
    textgender.value ="";
    textbreed.value ="";
    textservice.value ="";
    textowner.value ="";
    textcontact.value ="";
}

function display(aPet){
    var tbody = document.getElementById('rowPet');

    var row = `<tr>
                    <td> ${aPet.name} </td>
                    <td> ${aPet.age} </td>
                    <td> ${aPet.gender} </td>
                    <td> ${aPet.breed} </td>
                    <td> ${aPet.service} </td>
                    <td> ${aPet.ownerName} </td>
                    <td> ${aPet.ownerContact} </td>
                </tr>`;
    tbody.innerHTML+=row;
}

display(pet1);
display(pet2);
display(pet3);

