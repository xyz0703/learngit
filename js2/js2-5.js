JSON.parse(sessionStorage.getItem('arr4key'))
var arr= JSON.parse(sessionStorage.getItem('arr4key'))
console.log(arr)
var para = "<button class=judge> <div class=role> </div>   <div class=num> </div>  <div class=hover> <div class=logo> <div class=photo> </div> </div> </div> </button>"
for(i = 0; i < arr.length; i++) {
   //在相应位置添加div
    $('main').append(para);  
}
//获取新增的div
var role = document.getElementsByClassName('role')
var num = document.getElementsByClassName('num')
for(i = 0; i < arr.length; i++) {
   //给div写参数
    role[i].innerHTML = arr[i]
    num[i].innerHTML = i + 1 +"号";
}
$("#btn1").click(function() {
    if (confirm("确定结束本轮游戏么？")) {
        window.opener=null;
        window.open("js2-1.html")
        window.close()
    }
})
// 接收状态机状态
var a = sessionStorage.getItem('now');
console.log(a)
// 接受对象
var arr1= JSON.parse(sessionStorage.getItem('objkey'))
console.log(JSON.parse(sessionStorage.getItem('objkey')))
for(i = 0;i < arr1.length;i++)  {
    if( arr1[i].lad == 'dead'){
        $('.role').eq(i).css('background-color','#83b09a');
    }
}
if(a == 'end3'){
    $('.role').click(function(){
        var index = $('.role').index(this)
        console.log(index)
        $('#btn2').unbind('click');
        if(arr1[index].lad == 'dead'){
            $('#btn2').click(function(){
                if (confirm("当前玩家已死亡，请选择其他玩家")) {
                    window.opener=null;
                }
            })
        } 
        else if(arr1[index].myId == '杀手'){
            $('#btn2').click(function(){
                if (confirm("你是杀手不能杀死本职业,请选择其他玩家杀死")) {
                    window.opener=null;
                }
            })
        } 
        else {
            $('#btn2').click(function(){
                window.location = "js2-4.html";
                arr1[index].lad = 'dead';
                arr1[index].mySort = 'kill';
                console.log(arr1[index])
                sessionStorage.setItem('objkey',JSON.stringify(arr1))
          
            })   
        }
    }) 
}
if(a == 'self'){
    $('#header').html('投票');
    $('#center').html('发言讨论结束,大家请投票');
    $('#end').html('点击得票数最多的人的头像');
    $('.role').click(function(){
        var index = $('.role').index(this)
        $('#btn2').unbind('click');
        if(arr1[index].lad == 'dead'){
            $('#btn2').click(function(){
                if (confirm("当前玩家已死亡，请选择其他玩家")) {
                    window.opener=null;
                }
            })
        } 
        else {
            $('#btn2').click(function(){
                window.location = "js2-4.html";
                arr1[index].lad = 'dead';
                arr1[index].mySort = 'vote';
                console.log(arr1[index])
                for(i = 0;i < arr1.length;i++)  {
                    if(arr1[i].lad == 'alive'){
                        arr1[i].day++;
                    }
                }
                sessionStorage.setItem('objkey',JSON.stringify(arr1)) 
            })
        }  
    })
}




