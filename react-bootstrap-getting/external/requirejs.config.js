requirejs.config({
    baseUrl: "../",
    "paths": {
        "react": "dist/reactvendor",
        "react-bootstrap": "dist/bootvendor",
        "redux": "dist/reduxvendor",
        "app": "build/app",
        "jquery": "/external/jquery/jquery.min",


    },
    "shim": {
        "app": [ "react-bootstrap" ],
        "react-bootstrap": [ "react" ],
        "redux":[ "react" ],
    }
});

require( ["jquery"],
    function ($) {
        console.log("start..");
        require(["app","redux"] ,function(app,redux){
            console.log("app start..");
            $(".pos").remove();
        })
    });
