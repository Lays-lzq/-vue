window.onload = function() {
  var headNav = document.querySelector('.head-nav');
  var Hlis = headNav.querySelectorAll('li');
  var Hitems = document.querySelectorAll('.head-item');
  var Hselect = document.querySelector('.head-select');
  for(var i =0;i<Hlis.length;i++){
      Hlis[i].setAttribute('index',i);
      Hlis[i].onmouseover = function() {
          for(var i=0;i<Hlis.length;i++){
              Hlis[i].className = '';
              Hitems[i].style.display = 'none'; 
          }
          
          var index = this.getAttribute('index');
          Hitems[index].style.display = 'block';
      }
      Hlis[i].onmouseout = function() {
          for(var i=0;i<Hlis.length;i++){
              Hlis[i].className = '';
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
  }//headselect
  var pr = document.querySelector('.preview');
        var bigger = document.querySelector('.bigger');
        var zhan = document.querySelector('.zhanshi');
        var shi = document.querySelector('.shi');
        pr.addEventListener('mouseover',function(){ //鼠标经过时，黄色小框以及大图片显示
            bigger.style.display = 'block';
            zhan.style.display = 'block';
        })
        pr.addEventListener('mousemove',function(e){
                    var x = e.pageX - pr.offsetLeft; //获取鼠标在图片中的坐标
                    var y = e.pageY - pr.offsetTop;
                    if(x<100){                  //限制小框区域
                        x=100;
                    } else if(x>460){
                        x=460;
                    }
                    if(y<100){
                        y=100;
                    }else if(y>460){
                        y=460;
                    }
                    bigger.style.left = x-bigger.offsetWidth/2+'px';  //设置大图对应位置
                    bigger.style.top = y-bigger.offsetHeight/2+'px';
                    shi.style.left = bigger.offsetWidth-2*x+'px';
                    shi.style.top = bigger.offsetHeight-2*y+'px';
        })
            
        pr.addEventListener('mouseout',function(){  //鼠标离开时都不显示
            bigger.style.display = 'none';
            zhan.style.display = 'none';
        })// 放大镜


        var simg = document.querySelector(".small-img");
        var choose = document.querySelector(".choose-c");
        var Ca = choose.querySelectorAll("a");
        for(var i =0;i<Ca.length;i++){
          Ca[i].setAttribute('index',i);
          Ca[i].onclick = function() {
              for(var i=0;i<Ca.length;i++){
                  Ca[i].style.color = '#b0b0b0';
                  Ca[i].style.border = '1px solid #e0e0e0'; //所有按钮统一样式
              }
              var index = this.getAttribute('index');
              Ca[index].style.color = '#ff6700'; 
              Ca[index].style.border = '1px solid #ff6700';  //当前按钮更改样式
              simg.src = '../img/Redmi K30'+index+'.jpg';  //放大镜图片更改
              shi.src = '../img/Redmi K30'+index+'.jpg';
          }
        }
}