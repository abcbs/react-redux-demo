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
        "envdevlop":"dist/envdevlop",
        "q":"/external/qbase/q",
        "jquerymobile": "/external/jquery.mobile-1.4.5/jquery.mobile-1.4.5.min",
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


require(["baseframevendor"],function (baseframevendor) {

    require( ["react","redux","react-bootstrap"],function (react,redux,bootstrap){
        console.log("react redux");
        console.log("app bootstrap..");
        try{
            require(["app"] ,function(app){
                console.log("app loading..");
                //$(".pos").remove();
            })
        }catch(e){
            console.log("Loading app error.")
        }
    });

    // require( ['react-bootstrap'],function (bootstrap){
    //     console.log("app bootstrap..");
    //     try{
    //         require(["app"] ,function(app){
    //             console.log("app loading..");
    //             //$(".pos").remove();
    //         })
    //     }catch(e){
    //         console.log("Loading app error.")
    //     }
    // });
    require( ["jquery"],function ($){
        console.log("jquery...");
    });

    // require( ["jquerymobile"],function (jquerymobile){
    //     console.log("jquerymobile...");
    // });

});


