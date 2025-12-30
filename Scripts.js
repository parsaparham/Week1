//objects

var person={
    firstName:"Mohammad",
    lastName:"jafari"
}

var person2=new Object();

person2.phoneNmber=09132263154;
person2.age=44;


console.log(person2);

//Using Functions in Objects

var course={
    title:"Javascript",
    teacher:"Mohammad Jafari",
    level:1,
    isActive:true,
    views:0,
    updateView:function()
    {
        return ++course.views;
    }
}

console.log(course.views);
course.updateView();
console.log(course.views);




























console.log(Name);

//window.alert();

