// 写个js class 支持最多两个请求一起并发

class Scheduler {
    queue = [];
    result = [];
    max = 2;
    curr = 0;
    timer = null;
    constructor() {
        this.test = 1234;
    }

    async addTask(time) {
        const ss = await sleep(time)
        console.log(ss)
    }

    async addTaskLimit2(time) {
        let me = this;
        this.queue.push(time);
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
            me.addTaskCurr()
        }, 0);
    }

    // 如何限制两个并发
    // 采用递归函数
    async addTaskCurr() {
        let me = this;
        console.log('queue', this.queue)
        async function seriesRun() {
            if (me.queue.length === 0) {
                console.log('result', me.result)
                return;
            }
            let data = me.queue.shift();
            try {
                const ret = await fetch(data);
                console.log(me.queue, me.result, 'req finish')
                me.result.push(ret);
            } catch (error) {
                me.result.push(data + '-error');
            }
            seriesRun()
        }
        // 两个并发
        seriesRun();
        seriesRun();
    }
}

let fetch = function (time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(time)
        }, time);
    })
}

let sleep = function (time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(time)
        }, time);
    })
}

async function run(time) {
    const ss = await sleep(time)
    console.log(ss)
}

async function main(params) {
    var sh = new Scheduler();
    // 完全并发
    // sh.addTask(1500)
    // sh.addTask(1000)
    // sh.addTask(100)
    // sh.addTask(200)
    // sh.addTask(300)
    // sh.addTask(400)

    // // 串行
    // await sh.addTask(2000)
    // await sh.addTask(1000)
    // await sh.addTask(500)

    // 显示做多2并发
    sh.addTaskLimit2(1000)
    sh.addTaskLimit2(1000)
    sh.addTaskLimit2(2000)
    sh.addTaskLimit2(2000)
    sh.addTaskLimit2(3000)
    sh.addTaskLimit2(3000)
    sh.addTaskLimit2(1500)
    sh.addTaskLimit2(1500)
}
main();