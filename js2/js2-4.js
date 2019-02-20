// 返回上一级
$("#btn1").click(function(){
    window.location.href=("js2-2.html")
})
// 返回首页
$("#btn2").click(function(){
    if (confirm("确定返回首页么？")){
        window.opener=null;
        window.open("js2-1.html")
        window.close()
    }
}) 
// 结束游戏
$("#btn7").click(function(){
    window.location.href=("js2-1.html")
})
// 法官日志
$("#btn8").click(function(){
    window.location.href=("js2-6.html")
})
var arr = JSON.parse(sessionStorage.getItem('objkey'));
var index = $('.role').index(this)
// 动态生成天数
var day = '';
for(create = 0; create < arr.length; create++){
    if(arr[create].lad == 'alive'){
        day = arr[create].day;
    }
} 
for(let m = 0;m <= day-1;m++){
    var writeHtml =
    `    
    <div class="centent">
                <p>第${m+1}天</p>
            </div> 
            <div class="result"> 
                <div class="flow">
                    <div class="day">
                        <div class="round">
                            <img class="name" src="js2-4-1.png">
                        </div>
                        <button class="option margin-bottom btn3">
                            <p>杀手杀人</p>
                        </button>
                        <div class="explain">
                            <p class="answer1"></p>
                        </div>
                    </div>
                    <div class="day">
                        <div class="round">
                            <img class="name" src="js2-4-2.png">
                        </div>
                        <button class="option margin-bottom btn4">
                            <p>亡灵发表遗言</p>
                        </button>
                        <button class="option margin-bottom btn5">
                            <p>玩家依次发言</p>
                        <button class="option margin-bottom btn6">
                            <p>全民投票</p>
                    </button>
                    <div class="explain">
                        <p class="answer2"></p>
                    </div>
                </div>
            </div>
        </div>   
        <div class="wrap"> </div>
        `;
    $('main').append(writeHtml)  
}
// 死亡信息展示
var x=0
for(i = 0;i < arr.length;i++){
    if(arr[i].lad == 'dead'){
        console.log(arr[i])
        x = x + 1
    }
}
for(i = 0;i < arr.length;i++){
    if(arr[i].day <= Math.ceil(x/2)){
        if(arr[i].mySort == 'kill'){
            $('.answer1').eq(arr[i].day-1).html(arr[i].num-(-1) +'号被杀手杀死,真实身份是平民')
        }
        else if (arr[i].mySort == 'vote'){
            $('.answer2').eq(arr[i].day-1).html(arr[i].num-(-1) +'号被投死,真实身份是' + arr[i].myId)
        }
    }
} 
for(let j=1;j<=day;j++){
    // 已经完成的天数
    if(j<day){
        // 置灰
        $('.option:lt('+(4*j)+')').css('background','#83b09a');
        $('.option:lt('+(4*j)+')').addClass("change"); 
        $('.option').eq(4*(j-1)).click(function(){
            if (confirm ("请进行游戏下一项活动")){
                window.opener=null; 
            }
        })
        $('.option').eq(4*(j-1)+1).click(function(){
            if (confirm ("请进行游戏下一项活动")){
                window.opener=null; 
            }
        })
        $('.option').eq(4*(j-1)+2).click(function(){
            if (confirm ("请进行游戏下一项活动")){
                window.opener=null; 
            }
        })
        $('.option').eq(4*(j-1)+3).click(function(){
            if (confirm ("请进行游戏下一项活动")){
                window.opener=null; 
            }
        })
        $('.explain:lt('+(2*(day-1))+')').css('display','block');
        // $('.result:lt('+((day-1))+')').addClass("vote"); 
        $('.result').eq(j-1).addClass("vote"); 
        $(".centent").eq(j-1).click(function(){
            $(".result").eq(j-1).toggle();
        });  
    }
    // 正在进行的天数
    else{
        // 接收状态机初始状态
        var l= sessionStorage.getItem('now');
        // 状态机
        var fsm = new StateMachine({
            init: l,
            transitions: [
                { name: 'btn3',from:'self', to: 'end3'},
                { name: 'btn4',from:'end3', to: 'end4'}, 
                { name: 'btn5',from:'end4', to: 'end5'}, 
                { name: 'btn6',from:'end5', to: 'self'}   
            ],   
            methods: {
                onEnterEnd3: function() {
                    $(".option").eq(4*(day-1)).css('background','#83b09a');
                    $(".explain").eq(2*(day-1)).css('display','block');
                    $(".option").eq(4*(day-1)).addClass("change");
                    $(".result").eq(day-1).addClass("kill"); 
                },
                onEnterEnd4: function() {; 
                    $(".option").eq(4*(day-1)+1).css('background','#83b09a');
                    $(".option").eq(4*(day-1)+1).addClass("change"); 
                },
                onEnterEnd5: function() {
                    $(".option").eq(4*(day-1)+2).css('background','#83b09a');
                    $(".option").eq(4*(day-1)+2).addClass("change");
                },
                    // onEnterEnd6: function() {
                    //     $(".option").eq(4*(day-1)+3).css('background','#83b09a');
                    //     $(".explain").eq(2*(day-1)+1).css('display','block');
                    //     $(".option").eq(4*(day-1)+3).addClass("change"); 
                    //     $(".result").eq(day-1).addClass("vote"); 
                    // },
            }   
        })
            // 下拉内容  
        $(".centent").eq(day-1).click(function(){
            $(".result").eq(day-1).toggle();
        });   
              //游戏开始
        $(".btn3").eq(day-1).click(function(){
            switch (fsm.state){
                case 'self':
                window.location.href=("js2-5.html")
                sessionStorage.setItem('now','end3')
                fsm.btn3();
                break;
                default:
                if (confirm("请进行游戏下一项活动")){
                    window.opener=null; 
                }
            }
            
        })
        $(".btn4").eq(day-1).click(function(){
            switch (fsm.state){
                case 'end3':
                if (confirm("请死者亮明身份并且发表遗言")){
                    window.opener=null;
                }
                fsm.btn4();
                sessionStorage.setItem('now','end4')
                break;
                case "self":
                if (confirm("请按顺序操作")){
                    window.opener=null; 
                }
                break;
                default:
                if (confirm("请进行游戏下一项活动")){
                    window.opener=null; 
                }
            }
        })
        $(".btn5").eq(day-1).click(function(){
          
            switch (fsm.state){
                case 'end4':
                if (confirm("玩家依次发言讨论")){
                    window.opener=null;
                }
                fsm.btn5();
                sessionStorage.setItem('now','end5')
                break;
                case "self":
                if (confirm("请按顺序操作")){
                    window.opener=null; 
                }
                break;
                case "end3":
                if (confirm("请按顺序操作")){
                    window.opener=null; 
                }
                break;
                default:
                if (confirm("请进行游戏下一项活动")){
                    window.opener=null; 
                }
            }
        })
        $(".btn6").eq(day-1).click(function(){
            switch (fsm.state){
                case 'end5':
                window.location.href=("js2-5.html")
                fsm.btn6();
                sessionStorage.setItem('now','self')
                break;
                case "self":
                if (confirm("请按顺序操作")){
                    window.opener=null; 
                }
                break;
                case "end3":
                if (confirm("请按顺序操作")){
                    window.opener=null; 
                }
                break;
                case "end4":
                if (confirm("请按顺序操作")){
                    window.opener=null; 
                }
                break;
                default:
                if (confirm("请进行游戏下一项活动")){
                    window.opener=null; 
                }
            }
        })          
        // 游戏结束
        var m = 0;
        var n = 0;
        for (i = 0; i < arr.length; i++) {
            if (arr[i].lad == 'alive') {
                m = m + 1        
                if(arr[i].myId == '杀手'){
                    n = n + 1
                }
            }
        }
        if(n == 0 || (m - n) <= 1){
             window.location.href=("js2-7.html")
        }
    sessionStorage.setItem('mKey',m);
    sessionStorage.setItem('nKey',n);
    }
}   
