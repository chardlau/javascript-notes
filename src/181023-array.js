/*
 * 1. 数组是一种特殊的对象
 * 它的键名是按次序排列的一组整数（0，1，2...）
 * 不能使用点结构+数值的键名的方式访问数组的元素
 */
let a1 = [1, 2, 3];
console.log('typeof a1: ', (typeof a1));
console.log('Object.keys(a1): ', Object.keys(a1));


/*
 * 2. 数组的length属性
 * length的取值范围为0到(2^32-1)
 * length为最大键名+1
 * 可以修改length的值来控制数组的长度
 * 数组中没有定义值的元素为空位，值为undefined，可读
 * length设置为不合法值会报错
 * 由于数组是一种对象，可以添加其他非数值为键名，但这些属性不会影响length
 * 设置数组元素时，如果键名为超出数值范围的，该键名会自动转为字符串，因此它也为非数值键名，不影响length
 */
let a2 = ['a', 'b'];
console.log('a2.length: ', a2.length);
a2[10] = 'c';
console.log('a2: ', a2);
console.log('a2.length: ', a2.length);
a2.length = 5;
console.log('a2: ', a2);
console.log('a2.length: ', a2.length);
console.log('a2[3]: ', a2[3]);
// a2.length = -1; // RangeError: Invalid array length
a2['8'] = 10;
console.log('a2: ', a2);
console.log('a2.length: ', a2.length);
a2['test'] = 10;
console.log('a2: ', a2);
console.log('a2.length: ', a2.length);
a2[-1] = -1;
a2[Math.pow(2, 32)] = -1;
console.log('a2: ', a2);
console.log('a2.length: ', a2.length);


/*
 * 3. 数组与in运算符
 * 检查某个键名是否存在于数组中
 * 如果数组的某个位置是空位，in运算将返回false
 */
let a3 = ['a', 'b', 'c'];
console.log('a3: ', a3);
console.log('2 in a3: ', 2 in a3);
console.log('\'2\' in a3: ', '2' in a3);
console.log('4 in a3: ', 4 in a3);
a3[100] = 'z';
console.log('a3: ', a3);
console.log('100 in a3: ', 100 in a3);
console.log('99 in a3: ', 99 in a3);

/*
 * 4. for...in遍历数组
 * 不仅会遍历数值键而且会遍历非数值键
 * 因此如果只想遍历数值键对应的数据应该使用单纯的for或while根据length来遍历(注意这种方式会访问空位)
 * 或者使用数组的forEach方法()
 */
let a4 = ['a', 'b', 'c'];
a4[10] = 'k';
a4['test'] = 'z';
console.log('a4: ', a4);
console.log('Using for...in:');
for (let key in a4) {
    console.log(key, a4[key]);
}
console.log('Using for with length:');
for (let i = 0; i < a4.length; i++) {
    console.log(i, a4[i]);
}
console.log('Using forEach:');
a4.forEach(function(t, index) {
    console.log(index, t);
});

/*
 * 5. 数组的空位
 * delete元素会让数组对应位置产生空位，但length不变
 * 数组的某个位置是空位，与某个位置是undefined，是不一样的。如果是空位，使用数组的forEach方法、for...in结构、以及Object.keys方法进行遍历，空位都会被跳过。
 */
let a5 = ['a', 'b', 'c', 'd'];
delete a5[3];
console.log('a5: ', a5);
console.log('a5.length: ', a5.length);
delete a5[0];
console.log('a5: ', a5);
console.log('a5.length: ', a5.length);
a5.forEach(function (x, i) {
    console.log(i + '. ' + x);
});
console.log('Object.keys(a5): ', Object.keys(a5));
// 空位就是数组没有这个元素，所以不会被遍历到，而undefined则表示数组有这个元素，值是undefined，所以遍历不会跳过。
a5[4] = undefined;
console.log('a5: ', a5);
console.log('a5.length: ', a5.length);
console.log('Object.keys(a5): ', Object.keys(a5));


/*
 * 6. 类似数组的对象：（对象拥有length属性，那么这个对象就很像数组，但他们并不是真的对象）
 * 类似数组的对象常见的有：函数的arguments、大多数DOM元素集、字符串（尽管它不是对象）
 * 可以用Array的原型函数转换类似数组的对象为数组
 * 也可以用call函数让对象能够使用数组的方法（这种方法比直接使用数组原生的forEach要慢，所以最好还是先将“类似数组的对象”转为真正的数组，然后再直接调用数组的forEach方法。）
 */
let str = 'abcd';
console.log('str: ', str);
let a6 = Array.prototype.slice.call(str);
console.log('a6: ', a6);
Array.prototype.forEach.call(str, function (elem, i) {
    console.log(i + '. ' + elem);
});
