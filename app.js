function music(){
    const audio= new Audio('./assets/music/Am-thanh-phep-thuat-bien-mat-www_tiengdong_com.mp3')
    audio.play();
}


function music1(){
    const audio= new Audio('./assets/music/Tieng-yeah-tre-con-www_nhacchuongvui_com.mp3')
    audio.play();
}
function no(){
    music();
    var a = Math.floor(Math.random()*200)
    var b = Math.floor(Math.random()*200)
    var getno1 =document.getElementById('no1');
    window.navigator.vibrate(1000)
    getno1.style.left = '-'+a+'px';
    getno1.style.top = '-'+b+'px';

    getno1.style.position='absolute'
}

function yes(){
    music1();
    var getget = document.getElementById('text')
    setTimeout(function(){
        alert('Tớ biết mà 😄, Love You');
    },500)
  
    setTimeout(function(){
        getget.innerHTML = '<h2>Love You</h2>'
        getget.style.display='block'
        getget.style.textAlign = 'center'
    },50)

    setInterval(function(){
      getget.style.color='red'
    },50)

    setInterval(function(){
        getget.style.color='blue'
    },100)

}