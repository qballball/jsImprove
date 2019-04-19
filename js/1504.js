var obj={
    k:111
};
var m=20;
function add(x,y) {
    return x+y;
}
console.log(`1504被加载`);
export {obj,m,add};
// 可以指定导出
//export {obj as new1,m as new2,add};



// 可以默认导出,倒是一个页面只能用一次 否则报错
//export default 100;
//export default add;
export default {z:200};


