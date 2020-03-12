/**
 * 请实现
 * 第一步：1秒后打印出 "1"
 * 第二步：打印出"1"的2秒后打印出"2"
 * 第三步：打印出"2"的3秒后打印出"3"
 * **/






/**
 * 根据下方使用方式
 * 请实现EventEmitter函数
 * **/
function EventEmitter(){
    //please coder here
}





export let eventEmitter = new EventEmitter();

let handleEventListen = function(){
  console.log("执行")
};

// add event listener
let event = eventEmitter.addEventListener("event_type",handleEventListen);

// dispatch event
eventEmitter.emit("event_type");

//remove event listener 实现下面任意一种
eventEmitter.removeAllListeners("event_type");
// 或者
eventEmitter.removeListener("event_type",handleEventListen);
// 或者
event.remove();
