/**
 * 1.写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b 的时间，然后写一个 myClear，停止上面的 mySetInterVal
 */

function MySetInterVal (fn, a, b) {
    this.fn = fn;
    this.a = a;
    this.b = b;
    this.timer = {}
    this.delay = a;

    this.startTimer = function() {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.fn();
            console.log(this.delay)
            if(this.delay === this.a) {
                this.delay = this.a + this.b;
                this.startTimer();
            } else if(this.delay === this.a + this.b) {
                this.delay = this.a + 2 * this.b;
                this.startTimer();
            } else if (this.delay === this.a + 2 * this.b) {
                this.delay = this.a;
                this.startTimer();
            } else {
                clearTimeout(this.timer);
            }
        }, this.delay*100)
    }

    this.stopTimer = function() {
        clearTimeout(this.timer);
        return false
    }
}

let mySetInterVal = new MySetInterVal(() => {}, 1, 2)
mySetInterVal.startTimer();