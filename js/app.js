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
const deck = document.getElementsByClassName('deck');
let getOpen;
function firstStep (event){
    // debugger
    const targetName = event.target.nodeName// 0 点击的时候在 li
    const findOne = document.getElementsByClassName('open')// 自动更新
    if(findOne.length  === 0 && targetName === 'LI'){//1、如果页面上找不到 open 那么就添加
        event.target.classList.add('open');
        event.target.classList.add('show');
        getOpen= event.target.firstElementChild.classList[1]//2、储存第一个赋值
    }
    else if (findOne.length ===1){
        setTimeout(function () {
            event.target.classList.add('open');
            event.target.classList.add('show');
            if(findOne[0].classList.value === 'card open show'){
                if(findOne[0].firstElementChild.classList.value === findOne[1].firstElementChild.classList.value){//1 得到图标的名称
                    findOne[0].className ='card match';
                    findOne[0].className ='card match'
                }else {
                   const limit = event.target.classList.contains('open')
                    setTimeout(function () {

                        if(findOne.length ===2 && limit === true ){
                            findOne[0].className ='card'
                            findOne[0].className ='card'
                        }
                       // findOn[1].className ='card'
                    },400)
                }
            }
        },0)
    }


}

deck[0].addEventListener('click',firstStep)