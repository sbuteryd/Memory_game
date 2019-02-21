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
let second// 获取第一个打开的open 元素。
let third_first,third_second;
let list;

function clickCard (event) {
    const targLI = event.target.nodeName === "LI"
    const first = document.getElementsByClassName('open')//1、查看是否有打开元素，如果没有打开就打开
    if (first.length === 0 && targLI) {//2、设置打开元素
        event.target.classList.add('open');
        event.target.classList.add('show')
        second = document.getElementsByClassName('open')[0].firstElementChild.classList.value;
        console.log(second)


        //打开第二个元素
    }if (second !==null && targLI){
        third_first = event.target.classList;
        third_first.add('open');
        third_first.add('show')
        third_second = event.target.firstElementChild.classList.value//第二次点击的图标名称
        const find_all = document.getElementsByClassName('open show')
        console.log('find_all',find_all)


        if(third_second !==null && find_all.length === 2){
            if(third_second === second){
                const same = document.getElementsByClassName('open show');
                for (let i=0;i<same.length ;i++){
                    same[i].className ='card match'
                    for (let i=0;i<same.length;i++){
                        same[i].className ='card match'
                    }
                }
            }

        }
        else {
            setTimeout(function () {
                if (second !== third_second){
                    const deleOpen = document.getElementsByClassName('open show');
                    for (let i=0;i<deleOpen.length ;i++){
                        deleOpen[i].className ='card'
                        console.log('deleOpen',deleOpen[i].classList)
                        for (let i=0;i<deleOpen.length;i++){
                            deleOpen[i].className ='card'
                        }
                    }
                }
            },200)
        }

    }

}


deck.addEventListener('click',clickCard)