//Loops : for of - vs - for in

var cars=["Bens","BME","Toyota","KIA","Alfa Romeo"]; //Array
const car={name:"BMW X3",ProductYear:2006,color:"Blue",isABS:true}; //an Object

for(value of cars) //در آرایه داریم امتحان می کنیم
{
    console.log(value); //Output => Bens BMW Toyota KIA AlfaRomeo
}

// تفاوتش با بالا را ببینید
for(value in cars) //در آرایه داریم امتحان میکنیم
{
    console.log(value); //Output =>  0 1 2 3 4 
}







