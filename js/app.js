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
let count;

/*
*1-1、找到标签内的牌的class名称  fa fa-diamond 等 保存数组。。
*1-2得到随机之前的牌，添加到数组 listFA=[]
*1-3随机之前的牌，添加到数组
*1-4 随机的得到的牌 shuffle 保存 saveShuffle
*修改现有页面的牌  数组一个一个的进行替换 1对1, saveShuffle 随机等牌,children 现有牌
*倒计时 startTimer（）
*/


const children = getCards[0].children;
function changeClass() {
    let saveShuffle;
    let listFA = [];
    for(let i=0;i<children.length; i++){
        listFA.push(children[i].firstElementChild.className)
    }
    saveShuffle = shuffle(listFA);
    setCars(saveShuffle)
}
changeClass();
function setCars(saveShuffle) {
    for(let i=0;i<1; i++){
        for(let t=0;t<saveShuffle.length;t++){
            children[t].firstElementChild.className = saveShuffle[t]
        }
    }
}
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            gameOver()
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

function gameOver() {
    alert("游戏结束");
    location.reload()
}

/*
1   .deck 添加一个事件
2、 得到第一个open  findOne HTMLCollection [li.card.open.show]
3、 不包含 match
4、 第二个 点击到提那件，添加 open show
*/

const deck = document.getElementsByClassName('deck');
let moves=0;
let addList =[]
let  firstStep  = (event) => {
    moves +=1
    document.querySelector('.moves').textContent = moves
    const targetName = event.target.nodeName// 0 点击的时候在 li
    const findOne = document.getElementsByClassName('open')//
    let limitnoMatch = event.target.classList.contains('match')
    if(findOne.length  === 0 && targetName === 'LI' && limitnoMatch === false){//、0-1如果页面上找不到 open 那么就添加 并且打开
        event.target.className = ('card open show');
    }
    else if (findOne.length ===1 && targetName === 'LI') {
        let  noMatch = event.target.classList.contains('match')
        if (noMatch === false){
            event.target.className = ('card open show ');

            if(findOne.length >= 2 && targetName === 'LI'){
                console.log(findOne)
                if(findOne[0].firstElementChild.className === findOne[1].firstElementChild.className){
                    findOne[0].classList.add('animated','rubberBand');
                    findOne[1].classList.add('animated','rubberBand');
                    setTimeout( ()=>{
                        findOne[0].className = 'card match ';
                        findOne[0].className = 'card match';
                        getall();
                    },500)
                }else (setTimeout(() => {
                    if(findOne.length>=2 && targetName === 'LI'){
                        if(findOne[0].firstElementChild.className !== findOne[1].firstElementChild.className){
                            findOne[0].classList.add('animated','shake');
                            findOne[1].classList.add('animated','shake');
                            setTimeout( ()=> {
                                findOne[0].className = 'card'
                                findOne[0].className = 'card'
                            },500)
                        }
                    }
                },300))
            }
        }
    }
};

deck[0].addEventListener('click',firstStep);

//用户点击图标（relaod 页面）
const  reload = document.querySelector('.restart');
reload.onclick = ()=>{location.reload()};

//都配成功都情况下
const find_cards = document.getElementsByClassName('match');
//成功后弹出结果
function getall() {
    if(find_cards.length === 16){
        const save = document.getElementsByClassName('time');
        alert('你赢了游戏','步数是:',count)
        location.reload()
    }
}