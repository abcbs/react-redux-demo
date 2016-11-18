requirejs.config({
    baseUrl: "../",
    "paths": {
        "baseframevendor": "dist/baseframevendor",
        "react": "dist/reactvendor",
        "react-bootstrap": "dist/bootvendor",
        "redux": "dist/reduxvendor",
        "app": "/build/app",
         "jquery": "/external/jquery/jquery.min",
        "materialuivendor":"dist/materialuivendor",
        "q":"/external/qbase/q",
        // "home": "/build/home",
    },
    waitSeconds:60,
    "shim": {
        // "app": [ "react-bootstrap" ],
        "react-bootstrap": [ "react" ],
        "redux":[ "react" ],
        "materialuivendor":[ "react" ],
    }
});
require(["jquery","react"],function ($,sreact) {
    require( ["baseframevendor","redux",
        'react-bootstrap',"materialuivendor"],function (base,redux,bootstrap,mui){
        try{
            require(["app"] ,function(app){
                console.log("app loading..");
                $(".pos").remove();
            })
        }catch(e){
            console.log("Loading app error.")
        }

    });
});



