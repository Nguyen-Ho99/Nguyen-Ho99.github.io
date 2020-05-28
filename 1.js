document.addEventListener("DOMContentLoaded",function(){
var menu=document.querySelectorAll('nav');
var ac=document.getElementsByClassName('nav.navbar.navbar-light.bg-faded.menutop')
var sticky=document.getElementsByClassName('nutlen');
var scroll=document.querySelector('.scrollTop');
var menu=menu[0];
var trangthai="duoi200";

window.addEventListener("scroll",function(){
   var x = pageYOffset;
  
   
   if(x > 100){
            if(trangthai == "duoi200")
            {
                trangthai="tren200";
                menu.classList.remove('menutop');
                menu.classList.add('menutora');
           
            }
        }
        else{
            if(trangthai=="tren200"){
            menu.classList.remove('menutora');
              menu.classList.add('menutop');
            trangthai="duoi200";}
        }
      if (x>400) {
         sticky[0].classList.add('back-to-top');

      }
      else if(x<2000){
          sticky[0].classList.remove('back-to-top');
      }
})
function scrollToTop(){console.log("k kich dc");
   window.scrollTo({
      top:0,
      behavior:'smooth'

   })
}

},false)