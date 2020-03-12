const assert = require('assert');
const EventEmitter = require('../src/index').eventEmitter;
const expect = require('chai').expect;


(function testEmitFunction(){
    let times = 0;
    let handleEventListen = function(){
        console.log("执行");
        times++;
        assert(times>1,"事件可被清理");
    };

    let eventEmitter = EventEmitter.addEventListener("event_type",handleEventListen);

    EventEmitter.emit("event_type");

    // EventEmitter.removeAllListeners("event_type");
    // EventEmitter.removeListener("event_type",handleEventListen);
    // eventEmitter.remove();

    EventEmitter.emit("event_type");

})();

describe('EventEmitter', function(){
    it('should be construction', function() {
        expect(EventEmitter).to.be.a('object');
    });
});
