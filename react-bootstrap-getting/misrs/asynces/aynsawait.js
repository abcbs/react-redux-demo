async function f() {
    return 'hello world';
}

f().then(
    v => console.log(v)
);


var sleep = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(123);
        }, time);
    })
};

var start = async function () {
    try{
    console.log('start async');
    let f=await sleep(1);
    console.log('await end,result->',f);
    } catch (err) {
        console.log(err);
    }

};

var end = function () {
    console.log('start end common');
};

//由Generator操作文件
function readFiles() {
    var fs = require('fs');

    var readFile = function (fileName) {
        return new Promise(function (resolve, reject) {
            fs.readFile(fileName, function(error, data) {
                if (error) reject(error);
                resolve(data);
            });
        });
    };

    var gen = function* (){
        var f1 = yield readFile('/etc/fstab');
        var f2 = yield readFile('/etc/shells');
        console.log(f1.toString());
        console.log(f2.toString());
    };
}


module.exports={
    start:start,
    end:end,
    //asyncFS:asyncFS
}
