
const element=document.querySelector(".main-title");

element.innerHTML="I Take Your H2 Tag";


console.log(element);

//

const element2=document.querySelector(".promo-area").id;
console.log(element2);
//element2="myID";



const element3=document.querySelector("#showcase").className;
console.log(element3);

const element4=document.querySelector("#showcase").classList;

const element5=document.querySelector("#myID").classList;// an array
const element6=document.querySelector("#myID").classList[0];// a index 0 fro an array
element6="test";

//Omportant : some of classes in class list are readonly so can not change them

//But you can add a class in them
document.querySelector("#myID").classList.add("test");
//Or you can delete a class
document.querySelector("#myID").classList.remove("centered");

//One time add a class and one time delete a class
document.querySelector("#myID").classList.toggle("three-reasons");
















