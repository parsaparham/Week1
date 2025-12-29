

var Name;
var number;
var a,b,c,x,y;

a=12+1;
b=12;
c=a+b;
d="aliddd";
e=c+d;
var variable2=45-23+" GOD IS GREAT";
var person={FirstName:"Mohammad",LastName:"Jafari",Age:44};
var isComplete=false;
var isEqual;

number=1;
Name="Mohammad Parham Parsa";
 
document.writeln(person.Age,"  ",person.LastName);

isEqual=(a==b);
document.writeln(isEqual);

//Array Type 1
var colors=["red","black","yellow","orange"];
document.writeln(colors[2]);

//Array Type 2
var names=new Array("mohammad","ali","hasan","hossein");
document.writeln(names[2]);
console.log(names);

//Array Type 3
var MyArray=["Ali",23,true,"sajad",23.45];
document.writeln(MyArray);
document.writeln("<br>");

//Array reverse
document.writeln(colors);
colors.reverse(); //آرایه را برعکس می کند. یعنی مقادیر را از آخر میچیند
document.writeln("<br>");
document.writeln(colors);
document.writeln("<br>");

//اولین عنصر آرایه را کم میکند
colors.shift();
document.writeln(colors);
colors.shift();
document.writeln("<br>");
document.writeln(colors);

//به ابتدای آرایه یک عنصر اضافه می کند
colors.unshift("white");
document.writeln("<br>");
document.writeln(colors);


//آخرین عنصر آرایه را کم میکند
colors.pop();
document.writeln("<br>");
document.writeln(colors);

//به آخر آرایه یک عنصر اضافه می کند
colors.push("Gray");
document.writeln("</br>");
document.writeln(colors);

//یه کپی از آرایه می گیرد
var NewColors=colors.slice();
document.writeln("</br>");
document.writeln(NewColors);

//جستجو در آرایه
var result=colors.indexOf("black",0);
document.writeln("</br>");
document.writeln(result);

//تمام مقادیر آزایه را بصورت استرینگ  در میاره
var arrayString=colors.join();
document.writeln("<br/><br/><span>مقادیر آرا یه را بصورت یک رشته</span></br>");
document.writeln(arrayString);

//تمام مقادیر آرا یه را بصورت رشته در میاره و میتوانیم نوع جداکننده را مشخص کنیم
var arrayString1=colors.join("--");
document.writeln("<br/><br/>مقادیر آرایه بصورت رشته با جدا کننده دلخواه<br/>");
document.writeln(arrayString1);

//شرط خلاصه
//condition ? If Condition is true : If Condition is false;
var q=1 , w=2;
var isEqual;
q==w ? isEqual=true : isEqual=false;
document.writeln("<br/><br/><span>The Equal Match Is"+isEqual+"</span>");
















console.log(Name);

//window.alert();

