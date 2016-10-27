var thunkify=require("../../external/qbase/thunkify");
function f_Promise(a,b, cb) {
    var sum=a+b;
    //setInterval(test,5000);
    cb(sum);//回调函数
    return sum;
}

function log(c){
    console.log("this log->",c);

}
var f_Q_t = thunkify(f_Promise);
var ff=f_Q_t(2,4);
ff(log);