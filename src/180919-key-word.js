/*
 * 以下为js关键词
 */
let t = 'arguments、break、case、catch、class、const、continue、' +
    'debugger、default、delete、do、else、enum、eval、export、extends、' +
    'false、finally、for、function、if、implements、import、in、instanceof、' +
    'interface、let、new、null、package、private、protected、public、return、static、' +
    'super、switch、this、throw、true、try、typeof、var、void、while、with、yield';

let a = t.split('、');

for (let i = 0; i < a.length; ) {
    console.log(a.slice(i, i+5).join('\t'));
    i += 5;
}

// debugger interface private protected public with 这几个关键词有点陌生
