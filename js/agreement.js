window.onload = function() {
  var headNav = document.querySelector('.head-nav');
  var Hlis = headNav.querySelectorAll('li');
  var Hitems = document.querySelectorAll('.head-item');
  var Hselect = document.querySelector('.head-select');
  for(var i =0;i<Hlis.length;i++){
      Hlis[i].setAttribute('index',i);
      Hlis[i].onmouseover = function() {
          for(var i=0;i<Hlis.length;i++){
              Hitems[i].style.display = 'none'; 
          }
          
          var index = this.getAttribute('index');
          Hitems[index].style.display = 'block';
      }
      Hlis[i].onmouseout = function() {
          for(var i=0;i<Hlis.length;i++){
              Hitems[i].style.display = 'none'; 
          }
      }
  }
  headNav.onmouseover = function(){
      Hselect.style.height = 230+'px';
      Hselect.style.boxShadow = "0 1px 1px";
      Hselect.style.borderTop = "1px solid #e0e0e0";
  }
  headNav.onmouseout = function(){
      Hselect.style.height = 0+'px';
      Hselect.style.boxShadow = "none";
      Hselect.style.borderTop = "none";
  }//head下拉菜单
    var Lbanner = document.querySelector('.left-banner');
    var Lblis = Lbanner.querySelectorAll('li');
    var Bitems = document.querySelectorAll('.banner-item');
        for(var i =0;i<Lblis.length;i++){
            Lblis[i].setAttribute('index',i);
            Lblis[i].onclick = function() {
                for(var i=0;i<Lblis.length;i++){
                    Bitems[i].style.display = 'none'; 
                }
                var index = this.getAttribute('index');
                Bitems[index].style.display = 'block';
            }
        }
}//banner横向菜单