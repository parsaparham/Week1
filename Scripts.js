





//Loops : break vs continue 

//واکشی عناصر آرایه

//break => اگر به یه مقداری رسید کلا قطع میشود

const cars=["Benz","BMW","Toyota","Ford","NIssan","KIA","Land Cruize","Pegeout","Hyundai"];  //an Array

for(let i=0 ; i<10 ; i++)
{
    if(i==5){
        break;
    }
    console.log(cars[i]);
}

//Continue => اگر به یه مقداری رسید فقط آن مقدار را بیخیال میشود و بعد دوباره ادامه میدهد 

for(let i=0 ; i<10 ; i++)
{
    if(i==6){
        continue;
    }
    console.log(cars[i]);
}









