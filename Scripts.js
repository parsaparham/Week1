//objects Constructor

function Course(title,teacher,level,isActive,views,updateView)
{
    this.title=title,
    this.teacher=teacher,
    this.level=level,
    this.isActive=isActive,
    this.views=views,
    this.updateView=function (){
        return ++this.views;
    }
}

var Course1=new Course("Javascript","Mohammad Jafari",1,true,0);
var Course2=new Course("Python","Parsa Jafari",2,true,110);
var Course3=new Course("PytHtml Csshon","Parham Jafari",3,true,220);

console.log(Course1);
console.log(Course2);
console.log(Course3);




