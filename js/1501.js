console.log(`1501加载`);

var a=111;

//import {obj,m,add} from './1504.js'
//import {new1,new2,add,n} from './1504.js'

//console.log(obj,m,add(10,20));
//console.log(new1,new2,n,add(10,20));


// 使用import导入多次 也始终只会执行一次
//import d from './1504.js';



/* default 这是是一个变量接收
import n  from './1504.js';

console.log(n);*/


// 对变量起别名
//import {obj as obj2,m,add} from './1504.js'
//console.log(obj2);

// 把所有export的都导出来
import * as total from "./1504.js";
// default 是默认模块
console.log(total.default.z);


//{}外面的是默认的 {}是一般导出的，指定导出
//import num,{m,add} from './1504.js';
//console.log(num);


// 也可以什么也不调用 直接拿过来
import './1504.js';


import {c,addFun} from "./1505.js";
console.log(c);

// c不能在这里重新赋值 会报错
//c=300;
// 但是可以通过1505js里面的方法来改变c的值
console.log(addFun());


