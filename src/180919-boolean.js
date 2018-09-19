/*
 * 1. 转换：JavaScript预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。
 * 以下6个值被转为false，其他均为true
 * undefined
 * null
 * false
 * 0
 * NaN
 * ""或''（空字符串）
 */
if ('') {
    console.log('\'\' is true'); // Never execute
} else {
    console.log('\'\' is false');
}
if ([]) {
    console.log('[] is true');
}
if ({}) {
    console.log('{} is true');
}
