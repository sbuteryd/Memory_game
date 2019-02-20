/*
 * 创建一个包含所有卡片的数组
 */


/*
 * 显示页面上的卡片
 *   - 使用下面提供的 "shuffle" 方法对数组中的卡片进行洗牌
 *   - 循环遍历每张卡片，创建其 HTML
 *   - 将每张卡的 HTML 添加到页面
 */

// 洗牌函数来自于 http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * 设置一张卡片的事件监听器。 如果该卡片被点击：
 *  - 显示卡片的符号（将这个功能放在你从这个函数中调用的另一个函数中）
 *  - 将卡片添加到状态为 “open” 的 *数组* 中（将这个功能放在你从这个函数中调用的另一个函数中）
 *  - 如果数组中已有另一张卡，请检查两张卡片是否匹配
 *    + 如果卡片匹配，将卡片锁定为 "open" 状态（将这个功能放在你从这个函数中调用的另一个函数中）
 *    + 如果卡片不匹配，请将卡片从数组中移除并隐藏卡片的符号（将这个功能放在你从这个函数中调用的另一个函数中）
 *    + 增加移动计数器并将其显示在页面上（将这个功能放在你从这个函数中调用的另一个函数中）
 *    + 如果所有卡都匹配，则显示带有最终分数的消息（将这个功能放在你从这个函数中调用的另一个函数中）
 */


//1 .deck 添加一个事件
//2、ever.target.classList.tar()
//

const deck = document.querySelector('.deck');
let second,third,list;

function clickCard (event) {
    console.log(event)
    const first = document.querySelector('.open')//查看是否有打开元素，如果没有打开就打开
    if (first === null) {
        event.target.classList.add('open');
        event.target.classList.add('show')
        second = document.querySelector('.open').firstElementChild.classList.value.split()
        list = document.querySelectorAll('.open')
        //打开第二个元素
        console.log(second)
    }else if (second.length ===1 && list.length ===1){
        event.target.classList.add('open');
        event.target.classList.add('show');
        third = event.target.querySelector('i').classList.value;
        setTimeout(function () {
           if (second[0] !== third){
               event.target.className = 'card'//删除卡如果不匹配
               const findOne = document.querySelector('.open');
               findOne.className ='card'
           }
           if (second[0] === third) {//如果匹配 颜色统一
               event.target.className = 'card match'//删除卡如果不匹配
               const findOne = document.querySelector('.open');
               findOne.className ='card match'
           }

        },1000)
    }
        list = document.querySelectorAll('.open')//查询第二个open 限制打开数

}


deck.addEventListener('click',clickCard)