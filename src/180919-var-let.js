/*
 * 1. 变量提升
 * JavaScript 引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行。
 * 这造成的结果，就是所有的变量的声明语句，都会被提升到代码的头部，这就叫做变量提升（hoisting）
 */
function test1 () {
    console.log('test1');
    console.log(a1);
    var a1 = 1;
    // 等价于
    var a2;
    console.log(a2);
    a2 = 1;
    // console.log(a3); // let不会有变量名提升
    // let a3 = 1;
}
test1();

/*
 * 2. 作用域
 */
function test2 () {
    console.log('test2');
    for (var i = 0; i < 3; i++) { console.log(i); }
    console.log(i);

    for (let j = 0; j < 3; j++) { console.log(j); }
    console.log(j); // ReferenceError: j is not defined
}
// test2();


/*
 * 3. 作用域2
 * let定义的变量j具有块作用域，因此在每个循环的定时器访问当前回调函数里的值是在每次循环下确定的，下次循环无法修改回调函数里面的值。
 */
function test3 () {
    console.log('test3');
    for (var i = 0; i < 3; i++) {
        setTimeout(function() {
            // i is a mutable variable, is accessible from closure
            console.log(i);
        }, 1);
    }
    for (let j = 0; j < 3; j++) {
        setTimeout(function() {
            console.log(j);
        }, 1);
    }
}
// test3();
