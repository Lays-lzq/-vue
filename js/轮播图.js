window.onload = function() {
    var lun = document.querySelector('.lun');
    var l = document.querySelector('.l');
    var r = document.querySelector('.r');
    var ul = lun.querySelector('.lun-ul');
    var ol = lun.querySelector('ol');
    var p = 0;  //p代表当前轮播图播放的图片序号
    var c=0;  //c代表当前轮播图下方圆点的序号
    var lunwidth = lun.offsetWidth;
    lun.addEventListener('mouseover',function(){ //鼠标进入轮播图时
        l.style.display = 'block'; //左箭头显示
        r.style.display = 'block'; //右箭头显示
        clearInterval(timer);  //同时清楚计时器，即轮播图禁止自动播放
        timer = null;
    })
    lun.addEventListener('mouseout',function(){ //鼠标离开轮播图
        l.style.display = 'none'; //左箭头隐藏
        r.style.display = 'none'; //右箭头隐藏
        timer = setInterval(function(){ //设置定时器，让轮播图自动播放
        r.click();
        }, 2000);
    })
    for(var i=0;i<ul.children.length;i++){ //ul下每个li循环
        var li = document.createElement('li'); //创建li
        li.setAttribute('index',i); //给li设置自定义序列号index，赋值i，即第一个li的index为0
        ol.appendChild(li); //给ol添加li，通过循环动态的给ol添加轮播图图片对应数量的小圆点
        ol.children[0].className='current'; //给ol第一个li添加类名，表示当前的li
        li.addEventListener('click',function(){ //侦听点击事件
            for(var i=0;i<ol.children.length;i++){
                ol.children[i].className='';  //排它思想去除ol里li所有的类名
            }
            this.className='current'; //当前点击的li变更类名
            var index = this.getAttribute('index'); //获取序列号
            animatetrans(ul,-index*lunwidth); //让轮播图向左滑动对应长度
            p=index; 
            c=index; 
        })
    }
    var first = ul.children[0].cloneNode(true); //克隆第一张
    ul.appendChild(first); //在ul末尾添加第一张
    r.addEventListener('click',function(){   //当点击右箭头时
        if(p==ul.children.length-1){  //当轮播图滑倒最后一张时
            ul.style.left=0;   //直接跳到第一张
            p=0;  
        }
        p++;
        animatetrans(ul,-lunwidth*p); //向右滑一张
        c++;
        if(c==ol.children.length){
            c=0;
        }
        for(var i=0;i<ol.children.length;i++){
                ol.children[i].className='';
            }
            ol.children[c].className='current';
    })
    l.addEventListener('click',function(){  //点击左箭头
        if(p==0){
            ul.style.left=-(ul.children.length-1)*lunwidth+'px'; //跳到最后一张
            p=(ul.children.length-1);
        }
        p--;
        animatetrans(ul,-lunwidth*p);
        c--;
        if(c==-1){
            c=ol.children.length-1;
        }
        for(var i=0;i<ol.children.length;i++){
                ol.children[i].className='';
            }
            ol.children[c].className='current';
    })
    var timer = setInterval(function(){
        r.click();
    }, 2000);
     //轮播图
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
 
        var headNav = document.querySelector('.head-nav');
        var Hlis = headNav.querySelectorAll('li');
        var Hitems = document.querySelectorAll('.head-item');
        var Hselect = document.querySelector('.head-select');
        for(var i =0;i<Hlis.length;i++){
            Hlis[i].setAttribute('index',i); //给每个li设置序列号
            Hlis[i].onmouseover = function() {
                for(var i=0;i<Hlis.length;i++){
                    Hitems[i].style.display = 'none'; //所以对应板块不显示
                }
                var index = this.getAttribute('index'); //获取序列号
                Hitems[index].style.display = 'block'; //对应板块显示
            }
            Hlis[i].onmouseout = function() {
                for(var i=0;i<Hlis.length;i++){
                    Hitems[i].style.display = 'none'; //鼠标离开所有板块不显示
                }
            }
        }
        headNav.onmouseover = function(){  //经过导航栏时下拉菜单滑动，显示阴影
            Hselect.style.height = 230+'px';
            Hselect.style.boxShadow = "0 1px 1px";
            Hselect.style.borderTop = "1px solid #e0e0e0";
        }
        headNav.onmouseout = function(){
            Hselect.style.height = 0+'px';
            Hselect.style.boxShadow = "none";
            Hselect.style.borderTop = "none";
        }// head下拉菜单


        var leftBan = document.querySelector('.left-banner');   //同下拉菜单
        var Blis = leftBan.querySelectorAll('li');
        var Bitems = document.querySelectorAll('.banner-item');
        var Bselect = document.querySelector('.right-banner');
        for(var i =0;i<Blis.length;i++){
            Blis[i].setAttribute('index',i);
            Blis[i].addEventListener('mouseover',function() {
                for(var i=0;i<Blis.length;i++){
                    Bitems[i].style.display = 'none'; 
                }
                
                var index = this.getAttribute('index');
                Bitems[index].style.display = 'block';
            }),
            leftBan.addEventListener('mouseout',function() {
                for(var i=0;i<Blis.length;i++){
                    Bitems[i].style.display = 'none'; 
                }
            })
        }//banner 横向菜单
}

