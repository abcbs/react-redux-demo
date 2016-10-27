var thunkify=require("../../external/qbase/thunkify");
function f_Promise(a,b, callback) {
    var sum=a+b;
    callback(sum);//回调函数
    return sum;
}

function log(c){
    console.log("this log->",c);

}
var thunkified = thunkify(f_Promise);
var noCallback=thunkified(2,4);
noCallback(log);