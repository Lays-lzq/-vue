
        function animate(obj,target){   //匀速
            clearInterval(obj.timer);
             obj.timer = setInterval(function(){
            if(obj.offsetLeft==target){
                clearInterval(obj.timer);
            }
            obj.style.left = obj.offsetLeft+3+'px';
        }, 10);
        }
        function animatetrans(obj,target,callback){ // 缓动
            clearInterval(obj.timer);
            obj.timer = setInterval(function(){
            var step = (target - obj.offsetLeft)/10;
            step = step>0 ? Math.ceil(step) : Math.floor(step);
            if(obj.offsetLeft==target){
                clearInterval(obj.timer);
                if(callback){
                callback();
                }
            }
            obj.style.left = obj.offsetLeft+step+'px';
            },8);
        }
        function animatetransY(obj,target,callback){ // 缓动
            clearInterval(obj.timer);
            obj.timer = setInterval(function(){
            var step = (target - obj.offsetTop)/10;
            step = step>0 ? Math.ceil(step) : Math.floor(step);
            if(obj.offsetTop==target){
                clearInterval(obj.timer);
                if(callback){
                callback();
                }
            }
            obj.style.top = obj.offsetTop+step+'px';
            },8);
        }