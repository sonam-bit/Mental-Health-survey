const navbar = document.querySelector(".navbar1");
const navtoggle= navbar.querySelector(".nav-toggle");
console.log(navbar);
console.log(navtoggle);
navtoggle.addEventListener("click", function()
{
    let containerHeight= document.querySelector(".container1").getBoundingClientRect().height;
    const linkHeight = document.querySelector(".links").getBoundingClientRect().height;
    
   console.log(containerHeight);
   console.log(linkHeight);
    if(containerHeight==0)
    {
        document.querySelector(".container1").style.height =`${linkHeight+20}px`;
    }
    else
    {
        document.querySelector(".container1").style.height=0;

    } 
});

window.addEventListener("scroll", function()
{
    const navHeight = navbar.getBoundingClientRect().height;
    let scrolled = window.pageYOffset;
    console.log(scrolled);
    console.log(navHeight);
    if(scrolled > navHeight)
    {
        navbar.classList.remove("nav1");
        navbar.classList.add("nav-fixed");
    }
    else
    {
        navbar.classList.remove("nav-fixed");
        navbar.classList.add("nav1");

    }
    
});

const scroll= document.querySelector(".scroll-section");

scroll.addEventListener("click", function(e)
{
   e.preventDefault();
   const footerHeight = document.querySelector(".footer-section").offsetTop;
   let position= footerHeight;
   console.log(position);
   window.scrollTo({
    left:0,
    top:position,
   });
   container1.style.height=0;
});

const uparrow = document.querySelector(".top-link");

window.addEventListener("scroll", function()
{
  let y = window.pageYOffset;
  
  if(y> 500)
  {
    uparrow.classList.remove("hide-links");
    uparrow.classList.add("show-link");

  }
   
   else
   {
    uparrow.classList.remove("show-link");
    uparrow.classList.add("hide-links");

   }
   
});