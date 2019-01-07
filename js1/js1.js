var  div = document.getElementsByClassName('square');
var btnone = document.getElementById('btnone');
var btntwo = document.getElementById('btntwo');
var time;
function begin() {
    var one = Math.floor(Math.random()*div.length);
    var two = Math.floor(Math.random()*div.length);
    var three = Math.floor(Math.random()*div.length);
    if(one == two){
        one = Math.floor(Math.random()*div.length);
    }else if(two == three){
        two = Math.floor(Math.random()*div.length);
    }else if(one = three){
        three = Math.floor(Math.random()*div.length);
    }
    div[one].style.backgroundColor = 'rgb'+ colors();
    div[two].style.backgroundColor = 'rgb'+ colors();
    div[three].style.backgroundColor = 'rgb'+ colors();
}
function colors() {
    var rgb;
    var r = Math.floor(Math.random()*265);
    var g = Math.floor(Math.random()*265);
    var b = Math.floor(Math.random()*265);
    rgb = '('+r+','+g+','+b+')';
    return rgb;
}
btnone.onclick = function(){
    clearInterval(time);
    time = setInterval(function(){
        for(var i = 0; i <  div.length; i++){
            div[i].style.backgroundColor = '';
        }
        begin();

    },1000);
}
btntwo.onclick = function(){
    clearInterval(time);
    for(var i = 0; i <  div.length; i++){
        div[i].style.backgroundColor = '';
    }
}
