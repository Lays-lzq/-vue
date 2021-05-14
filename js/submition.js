window.onload = function() {
     var headlogo = document.querySelector('.header-logo')
     var logoleft = document.querySelector('.logo-left');
     var logoright = document.querySelector('.logo-right');
              
     headlogo.addEventListener('mouseover',function(){
         animatetrans(logoleft,56);
         animatetrans(logoright,1);
     })
     headlogo.addEventListener('mouseout',function(){
         animatetrans(logoleft,1);
         animatetrans(logoright,-54);
     })//logo
}