//Loops : For

var cars=["Bens","BME","Toyota","KIA","Alfa Romeo"]; //Array

console.log(cars);

console.log("The Car Brand is: "+cars);

console.log("The Car Brand is: "+cars[2]);

for(let i=0;i<5;i++)
{
    console.log("The Car Brand is :"+cars[i]);
}


//For in-- in Arrays
for (key in cars)
{
    console.log(key);//output=> name ProductYear color isABS
    console.log(cars[key]); //Output=> BMWX3 2006 Blue true
}


//For in-- in Objects
const car={name:"BMW X3",ProductYear:2006,color:"Blue",isABS:true}; //an Object
for (key in car)
{
    //console.log(key);//output=> name ProductYear color isABS
   // console.log(car[key]); //Output=> BMWX3 2006 Blue true
}








