
// OBJECT 

// var houseGirl= {
//     name: "tayo",
//     age:  12,
//     pregnant: false,
//     hieght:34,
//     hubby: ["dancing", "singing"],

// }

// CREAT A FACTORY THAT CREATE OBJECT

// function HouseGirl (name, age, pregnant, hieght, hubby){
// this.name= name;
// this.age=  age;
// this.pregnant= pregnant;
// this.height= hieght;
// this.hubby= hubby;

// }
// var houseGirl= new HouseGirl("tayo", 19, true, 20, ["dancing", "singing"]);
// var houseGir2= new HouseGirl("titus", 10, true, 22, ["dancing", "singing"]);
// var houseGir3= new HouseGirl("ayo", 15, false, 21, ["dancing", "singing"]);

// METHOD
// var bellboy = {
// name:"tayo",
// age:15,
// hasworkpermit: true,
// language: ["English", "French"],
// moveSuitCase: function (){
// alert ("May I take your suitcase");
// pickUpSuitcase
// move ();

// }

// }

// bellboy.moveSuitCase();


// function HouseGir (name, age, pregnant, hieght, hubby,  ){
//     this.name= name;
//     this.age=  age;
//     this.pregnant= pregnant;
//     this.height= hieght;
//     this.hubby= hubby;
//     this.clean= function () {
//         alert ("Cleaning in progress");
//     } 
// }
// var houseGirl1 = new HouseGirl (12,13,true,13,["singing", "dancing"]);
// houseGirl1.clean(); 


// // ....................

// function Audio (fileLocation) {
// this.fileLocation= fileLocation;
// this.play = function () {

// }

// }  

// var tom1 = new Audio ("sound/tom-1.mp3");
// tom1.play ();

//   $0.addEventListener ("click", function (event){
// console.log (event);
//   })

//   function sayHi(to){
//     console.log ("Hello," + to);
//   }

//   sayHi ("Tom");
//    or

//    ............

//    function sayHi (name){
//     console.log ("Hello," + name);

//    }

//    sayHi ("Tayo");


function anotherAddEventLister (tpyeOfEvent, callBack){

    var eventThatHappened ={
   eventType: "keypress",
   key: "p",
   durationOfKeypress:2
    } 
   if (eventThatHappened.eventType=== tpyeOfEvent){
      callBack(eventThatHappened);
   }
}