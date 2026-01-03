//Changr Attributes with Java

//const element=document.querySelector("#showCcse").hasAttribute("href");  //=>false
//const element1=document.querySelector("#showcase").hasAttribute("class");   //true
//console.log(element1);

//document.querySelector("#showcase").setAttribute("class","test");

//document.querySelector("#test").removeAttribute("class");

const ctaElement=document.querySelector(".cta a");

console.log(ctaElement.attributes);

if(ctaElement.hasAttribute("target"))
{
    console.log(ctaElement.getAttribute("target"));// target is a ataribute  in that says if the eleman is click oprn that href in a new tab
}else
{
    ctaElement.setAttribute("target","_blank");
}




















