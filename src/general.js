var effect={
    is:false,
    timer:null,
    hide:function (){
        var ico = document.getElementsByClassName('ico')[0];
        var nav = document.getElementsByClassName('nav')[0];
        var wrapper = document.getElementsByClassName('head')[0];
        var navbtn = nav.getElementsByClassName('bt');
        var navbar = document.getElementsByClassName('navbtn')[0];
        wrapper.style.display = 'block';
        var i = 0;
        clearInterval(this.timer);
        var that = this;
        this.timer = setInterval(function(){
            navbtn[0].style.right = (-3*i) + 'px';
            navbtn[1].style.right = (-2*i) + 'px';
            navbtn[2].style.right = (-1*i) + 'px';
            ico.style.right = -(110 + (document.body.offsetWidth-110)*i/180 ) + 'px';
            wrapper.style.opacity = (104-i)/104;
            navbar.style.opacity = i/103;
            navbar.style.left = (16 + (document.body.offsetWidth-16 - 50)*i/104 ) + 'px';
            i++;
            if(i == 104){
                wrapper.style.display = 'none';
                clearInterval(that.timer);
            }
    
        },5);
    },
    show:function (){
        var ico = document.getElementsByClassName('ico')[0];
        var nav = document.getElementsByClassName('nav')[0];
        var wrapper = document.getElementsByClassName('head')[0];
        var navbtn = nav.getElementsByClassName('bt');
        var navbar = document.getElementsByClassName('navbtn')[0];
        wrapper.style.display = 'block';
        var i = 104;
        clearInterval(this.timer);
        var that = this;
        this.timer = setInterval(function(){
            navbtn[0].style.right = (-3*i) + 'px';
            navbtn[1].style.right = (-2*i) + 'px';
            navbtn[2].style.right = (-1*i) + 'px';
            ico.style.right = -((document.body.offsetWidth-110)*i/180 ) + 'px';
            wrapper.style.opacity = (104-i)/104;
            navbar.style.opacity = i/103;
            navbar.style.left = (16 + (document.body.offsetWidth-16 - 50)*i/104 ) + 'px';
            i--;
            if(i == -1){
                clearInterval(that.timer);
            }
    
        },5);
    }
}

// 滚轮事件
document.body.onscroll = function(e){
    if(scrollY == 0){
        if(effect.is == true){
            effect.show();
            effect.is = false;
        }
        
    }else{
        if(effect.is == false){
            effect.hide();
            effect.is = true;
        }
    }
}
// 导航按钮事件
document.getElementsByClassName('navbtn')[0].onclick = function(){
    effect.show();
    effect.is = false;
}



// =====================================
var btn = document.getElementsByClassName('DUYI_chooseButton_underline');
var urlarr = ['./index.html','./course.html','./student.html','./about.html']
for(var i = 0; i<btn.length; i++){
    (function(){
        var _i = i;
        btn[i].onclick = function () {
            location.href = urlarr[_i];
        }
    })();
}
