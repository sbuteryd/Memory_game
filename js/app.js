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

//1、收集卡片、2、进行随机打乱、3、然后在进行修改。

const getCards = document.getElementsByClassName('deck');

const children = getCards[0].children//1-1、找到标签内的牌的class名称。


function changeClass() {
    let saveShuffle//保存数组
    let listFA = []//1-2得到随机之前的牌，添加到数组
    for(let i=0;i<children.length; i++){    //1-3随机之前的牌，添加到数组
        listFA.push(children[i].firstElementChild.className)
    }
    console.log(listFA)
}

changeClass()



//1 .deck 添加一个事件
const deck = document.getElementsByClassName('deck');
let addList =[]
let  firstStep  = (event) => {
    const targetName = event.target.nodeName// 0 点击的时候在 li
    const findOne = document.getElementsByClassName('open')//
    let limitnoMatch = event.target.classList.contains('match')
    if(findOne.length  === 0 && targetName === 'LI' && limitnoMatch === false){//、0-1如果页面上找不到 open 那么就添加 并且打开
        event.target.className = ('card open show');
    }
   // 1、 得到第一个open  findOne HTMLCollection [li.card.open.show]
    else if (findOne.length ===1 && targetName === 'LI') {
        let  noMatch = event.target.classList.contains('match') // 2、 不包含 match
        // console.log('2',event.target.classList)  DOMTokenList ["card", value: "card"]  结果
        if (noMatch === false){
            event.target.className = ('card open show ');
            //3 第二个 点击到提那件，添加 open show
            if(findOne.length >= 2 && targetName === 'LI'){
                if(findOne[0].firstElementChild.className === findOne[1].firstElementChild.className){
                    findOne[0].classList.add('animated','rubberBand')
                    findOne[1].classList.add('animated','rubberBand')
                    setTimeout( ()=>{
                        findOne[0].className = 'card match ';
                        findOne[0].className = 'card match'
                    },1000)
                }else (setTimeout(() => {
                    if(findOne.length>=2 && targetName === 'LI'){
                        if(findOne[0].firstElementChild.className !== findOne[1].firstElementChild.className){
                            findOne[0].classList.add('animated','shake');
                            findOne[1].classList.add('animated','shake');
                            setTimeout( ()=> {
                                findOne[0].className = 'card'
                                findOne[0].className = 'card'
                            },1000)
                            // findOne[0].className = 'card' ;
                            // findOne[0].className = ' animated bounce card';
                        }
                    }
                },300))

            }
        }
    }


}
deck[0].addEventListener('click',firstStep);

const  reload = document.querySelector('.restart');

reload.onclick = ()=>{location.reload()};