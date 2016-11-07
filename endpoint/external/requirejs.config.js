requirejs.config({
    baseUrl: "../",
    "paths": {
        "react": "dist/reactvendor",
        "react-bootstrap": "dist/bootvendor",
        "app": "build/app",
        "jquery": "/external/jquery/jquery.min",

    },
    "shim": {
        "app": [ "react-bootstrap" ],
        "react-bootstrap": [ "react" ],
    }
});

require( ["jquery"],
    function ($) {
        console.log("start..");
        require(["app"] ,function(app){
            console.log("app start..");
            $(".pos").remove();
        })
    });
