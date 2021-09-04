


setInterval(function(){
    var get =document.getElementById('pk')
    get.style.opacity=0.3
    get.style.transform='skew(30deg)'
    get.style.color='white'
    get.style.transition='1s linear'
},1000)

setInterval(function(){
    var get =document.getElementById('pk')
    get.style.opacity=1
    get.style.fontWeight='bold'
    get.style.color='red'
    get.style.fontSize='19px'
    get.style.transform='skew(0)'
},2000)

var i=1;
var a=setInterval(function(){
    var get =document.getElementById('pk')
    i+=5;
    get.style.marginLeft=i+'px'
    
    get.style.position='relative'
    console.log(i)
    if(i>50){
        clearTimeout(a)
        var b=setInterval(function(){
            var get =document.getElementById('pk')
            i-=5;
            console.log(i);
            get.style.position='relative'
            get.style.marginLeft=i+'px'
            if(i<10)
            clearInterval(b)
        },1000)
        setInterval(a,1000)
    }
    
      
},1000)

function music(){
    const audio= new Audio('./assets/music/Am-thanh-phep-thuat-bien-mat-www_tiengdong_com.mp3')
    audio.play();
}


function music1(){
    const audio= new Audio('./assets/music/Tieng-yeah-tre-con-www_nhacchuongvui_com.mp3')
    audio.play();
}
function music2(){
 const audio=new Audio('./assets/music/LoveIsLikeAFlower-Danbi_3w7nv.mp3');
audio.play();
}
function no(){
    music();
    var a = Math.floor(Math.random()*200)
    var b = Math.floor(Math.random()*200)
    var getno1 =document.getElementById('no1');
    window.navigator.vibrate(100)
    getno1.style.position='absolute'
    getno1.style.left = '-'+a+'px';
    getno1.style.top = '-'+b+'px';
}

function yes(){
    music1();
    var getget = document.getElementById('text')
    setTimeout(function(){
        alert('Tớ biết mà 😄, Love You');
    },500)
  
    music2();

    var getimg= document.getElementById('anh1')

    getimg.style.zIndex=1000;
    var list =['https://images.unsplash.com/photo-1511018587878-f734c3819cfc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbiUyMGxvdmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60','https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FydG9vbiUyMGxvdmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60','https://images.unsplash.com/photo-1514446750685-c27ac87a4403?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FydG9vbiUyMGxvdmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60','https://images.unsplash.com/photo-1515890435782-59a5bb6ec191?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcnRvb24lMjBsb3ZlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60','https://images.unsplash.com/photo-1516476573449-6fc45bb2f602?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGNhcnRvb24lMjBsb3ZlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60']
  

    var i=1;
    setInterval(function(){
        getimg.src=list[i];
        i++;
        if(i==5)
            i=0;
    },2000)


    
    setTimeout(function(){
        getget.innerHTML = '<h2>Love You</h2>'
        var i = 0;
        var x= 1;
        var t = setInterval(run,10)
        function run(){
          if(i>150||i<-150)
              x=-x;
          i+=x;
          getget.style.left = i+'px'
        }
        getget.style.display='block'
        getget.style.textAlign = 'center'
    },50)

    setInterval(function(){
      getget.style.color='red'
    },50)

    setInterval(function(){
        getget.style.color='yellow'
    },100)

}
