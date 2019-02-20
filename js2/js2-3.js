var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var num3 = document.getElementById('num3');
var num4 = document.getElementById('num4');
var diary = document.getElementById('diary');
var identity = document.getElementById('identity');
var emperor = document.getElementById('emperor');
var killer = document.getElementById('killer');
var civilian = document.getElementById('civilian');
var baddie = document.getElementById('baddie');
var goody = document.getElementById('goody');
var kill = document.getElementById('kill');
var people = document.getElementById('people');
sessionStorage.getItem('d1Key');
var a = sessionStorage.getItem('d1Key');
console.log(sessionStorage.getItem('d1Key'));
sessionStorage.getItem('d2Key');
var b = sessionStorage.getItem('d2Key');
console.log(sessionStorage.getItem('d2Key'));
var c = a - (-b);
console.log(c);
btn1.onclick = function () {
    window.location.href = ("js2-2.html");
}
btn2.onclick = function () {
    if (confirm("确定返回首页么？")) {
        window.opener = null;
        window.open("js2-1.html");
        window.close();
    }
}
var arr1 = []
for (i = 0; i < a; i++) {
    arr1[i] = killer.innerHTML
}
var arr2 = []
for (i = 0; i < b; i++) {
    arr2[i] = civilian.innerHTML
}
var arr = []
for (i = 0; i < c; i++) {
    arr = arr1.concat(arr2)
}
for (var m = arr.length; m;) {
    var i = Math.floor(Math.random() * m--);
    var t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
}
var x = 0;
function mybtn3() {
    x = x + 1
    i = x / 2 - 1
    if (x % 2 == 0) {
        num1.innerHTML++;
        btn3.innerHTML = "查看" + num2.innerHTML + "号身份";
        identity.innerHTML = emperor.innerHTML;
    }
    else {
        num2.innerHTML++;
        btn3.innerHTML = "隐藏并传递给" + num2.innerHTML + "号";
        identity.innerHTML = arr[(x - 1) / 2]
        console.log(arr[(x - 1) / 2])
    }
    if (x == 2 * c - 1) {
        btn3.innerHTML = "法官查看"
        console.log(arr)
    }
    //法官查看
    if (x == 2 * c) {
        btn1.onclick = function () {
            window.location.href = ("js2-4.html");
        }
        btn3.innerHTML = "开始游戏"
        var arr3 = arr
        for (i = 0; i < c; i++) {
            num3.innerHTML = i + 1
            num4.innerHTML = i + 1
            if (arr3[i] == killer.innerHTML) {
                arr3[i] = baddie.innerHTML;
            }
            else {
                arr3[i] = goody.innerHTML;
            }
            main.innerHTML = arr3.join('')
        }
        console.log(arr3)
        var arr4 = arr3
        for (i = 0; i < c; i++) {
            num3.innerHTML = i + 1
            num4.innerHTML = i + 1
            if (arr4[i] == baddie.innerHTML) {
                arr4[i] = kill.innerHTML;
            }
            if (arr4[i] == goody.innerHTML) {
                arr4[i] = people.innerHTML;
            }
            console.log(arr4)
            sessionStorage.setItem('arr4key', JSON.stringify(arr4))
           
            console.log(arr5)
            sessionStorage.setItem('now', 'self');
        }
        var arr6 = []
        for (i = 0; i < c; i++) {
            // 添加对象
            var obj = {};
            // 天数
            obj.day = 1;
            // 是否活着
            obj.lad = 'alive';
            // 玩家号数
            obj.num = i;
            // 被杀死
            obj.mySort = '';
            // 玩家身份
            obj.myId = arr4[i];
            // 对象放入数组
            arr6.push(obj);
        }
        sessionStorage.setItem('objkey', JSON.stringify(arr6))
    }
    console.log(arr4)
    if (x == 2 * c + 1) {
        window.location.href = ("js2-4.html");
    }
}
var arr5 = JSON.parse(sessionStorage.getItem('arr4key'))
// 对象数组       
