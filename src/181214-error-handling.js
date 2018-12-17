/*
 * try {} catch {} finally {}
 * return语句的执行是排在finally代码之前，只是等finally代码执行完毕后才返回。
 */
function f() {
    try {
        console.log(0);
        throw 'bug';
    } catch(e) {
        console.log(1);
        return true; // 这句原本会延迟到 finally 代码块结束再执行
        console.log(2); // 不会运行
    } finally {
        console.log(3);
        return false; // 这句会覆盖掉前面那句 return
        console.log(4); // 不会运行
    }

    console.log(5); // 不会运行
}
let result = f();
console.log('result: ', result);

