document.getElementById("test").innerHTML="Test for working well";


const Names=["Mohammad","Ali","Milad","Parsa","Parham"];



function CreatLiElement()
{

    for (const item of Names)
    {

    

    var node = document.createElement("li");

    var textNode = document.createTextNode(item);

    node.appendChild(textNode);//means ضمیمه کن

    document.getElementById("myList").appendChild(node);
    }
}

CreatLiElement();

