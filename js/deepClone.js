// 手动实现一个深度拷贝

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

async function main() {
    // 浅拷贝简单
    // 深拷贝
    var a = {a: 1, b: 3, c: [1,2,3,44, 5]}
    // var newA = Object.assign({}, a);
    // var otherA = {...a};

    // 引用类型是会被修改的
    // newA.a = 1234;
    // newA.c[0] = 1234;
    // otherA.a = 0x1234;
    // console.log(a, 'newA', newA, 'otherA', otherA);

    // 如何使用递归进行深度拷贝(最简单的就json stringify parse)

    var a = {
        a: 1, b: 3, c: [1,2,3,44, 5],
        d : {
            bb: 1423, cc: 90, dd: 'fuckyou', ee: [41324,123,413]
        }
    }
    var newDeepA = deepClone(a)
    newDeepA.c[0] = 1234;

    console.log(a, 'newDeepA', newDeepA);
}

main()

// 如何实现一个
function deepClone(obj) {
    let ret = {}
    // 递归的判断逻辑
    // 递归如何终止
    if (['string', 'number', 'boolean'].includes(typeof(obj))) {
        return obj
    }

    const copy = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        copy[key] = deepClone(obj[key])
    }

    return copy;
}


function deepCloneNew(obj) {
    // 基本类型直接返回
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    const copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepClone(obj[key]); // 递归拷贝
        }
    }
    return copy;
}