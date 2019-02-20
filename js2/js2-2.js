function jump() {
    window.location.href=("js2-1.html");
}
var d0 = document.getElementById('d0');
var d1 = document.getElementById('d1');
var d2 = document.getElementById('d2');
var d3 = document.getElementById('d3');
var btnone = document.getElementById('btnone');
var btntwo = document.getElementById('btntwo');
var btnthree = document.getElementById('btnthree');
sessionStorage.getItem('d1key');
sessionStorage.getItem('d2key');
d0.oninput = function() {
    if (d0.value==15||d0.value==18) {
        d1.innerHTML=Math.floor(d0.value/3-1);
        d2.innerHTML=d0.value- d1.innerHTML;
    }
    else {
        d1.innerHTML=Math.floor(d0.value/3);
        d2.innerHTML=d0.value- d1.innerHTML;
    }                                
    d3.value = d0.value;
}
d3.oninput = function() {
    d0.value = d3.value;
    d0.oninput ();
    d3.setAttribute('style','background-size:'+(this.value-4)/14*100+ '% 1000%');
}
btnone.onclick = function() {
    d3.value=d3.value-1;
    d3.oninput ();
}
btntwo.onclick = function() {
    d3.value=d3.value-(-1);
    d3.oninput ();
}
function firm() {  
	var r=confirm("请输入正确的玩家数量");
	if (r==true){
	}
}  
btnthree.onclick = function() {
    window.location.href=("js2-3.html");
    sessionStorage.setItem('d1Key',d1.innerHTML);
    sessionStorage.setItem('d2Key',d2.innerHTML);
}