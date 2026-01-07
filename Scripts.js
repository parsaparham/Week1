const CTA=document.querySelector(".cta a");
const ALERT=document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e)
{
    e.preventDefault();رفتارهای پیش فرض ذا ازش میگیرد وباعث میشه صفحه از بالا لود نشود هنگام کلیک کردن
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}


CTA.onclick=reveal();


