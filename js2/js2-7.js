// 剩余人数
var m = sessionStorage.getItem('mKey');
console.log(m)
var n = sessionStorage.getItem('nKey');
console.log(n)
$('#player').html('杀手'+ n +'人&emsp;&emsp;平民'+(m-n)+'人') 
var arr = JSON.parse(sessionStorage.getItem('objkey'));
console.log(JSON.parse(sessionStorage.getItem('objkey')))
// 动态生成天数
var day = '';
for(create = 0; create < arr.length; create++){
    if(arr[create].lad == 'alive'){
        day = arr[create].day;
    }
} 

for(let i = 1;i <= day;i++){
    var writeHtml =
    `    
    <div class="black">
                    <p class="name">第${i}天</p>
                </div>
                <p class="name font-gray night"></p>
                <p class="name font-gray day"></p>       
    `;
    $('.down').append(writeHtml)  
}
//  显示死亡信息
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
            $('.night').eq(arr[i].day-1).html('黑夜:'+ (arr[i].num-(-1)) +'号被杀手杀死,真实身份是平民')
        }
        else if (arr[i].mySort == 'vote'){
            $('.day').eq(arr[i].day-1).html('白天:'+ (arr[i].num-(-1)) +'号被投死,真实身份是' + arr[i].myId)
        }
    }
} 
