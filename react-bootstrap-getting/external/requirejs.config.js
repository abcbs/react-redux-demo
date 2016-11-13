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
var Promise ;
function loadJQuery() {
    var p=Promise(function(resolve, reject) {
        try{
            require(["jquery"] ,function(jquery){
                console.log("jquery-mobile loading...");

            })
            resolve("jquery");
        }catch(err){
            reject("jquery loading")
        }
        
     });
    return p;

}

function loadReact() {
    var p=Promise(function(resolve, reject) {
        try{
            require(["react"] ,function(react){
                console.log("react loading...");

            })
            resolve("react");
        }catch(err){
            reject("react loading")
        }

    });
    return p;
}

function loadRedux() {
    var p=Promise(function(resolve, reject) {
        try{
            require(["redux"] ,function(redux){
                console.log("reduxloading...");

            })
            resolve("redux");
        }catch(err){
            reject("redux loading")
        }

    });
    return p;
}

function loadBaseframevendor() {
    var p=Promise(function(resolve, reject) {
        try{
            require(["baseframevendor"] ,function(baseframevendor){
                console.log("baseframevendor loading...");

            })
            resolve("baseframevendor");
        }catch(err){
            reject("baseframevendor loading")
        }

    });
    return p;
}


function loadMaterialuivendor() {
    var p=Promise(function(resolve, reject) {
        try{
            require(["materialuivendor"] ,function(materialuivendor){
                console.log("materialuivendor loading...");

            })
            resolve("materialuivendor");
        }catch(err){
            reject("materialuivendor loading")
        }

    });
    return p;
}

function loadBootstrap() {
    var p=Promise(function(resolve, reject) {
        try{
            require(["react-bootstrap"] ,function(bootstrap){
                console.log("react-bootstrap loading...");

            })
            resolve("react-bootstrap");
        }catch(err){
            reject("react-bootstrap loading")
        }

    });
    return p;
}

function loadApp() {
    var p=Promise(function(resolve, reject) {
        try{
            require(["app"] ,function(app){
                console.log("react-bootstrap loading...");

            })
            resolve("app");
        }catch(err){
            reject("app")
        }

    });
    return p;
}

function loadHome() {
    var p=Promise(function(resolve, reject) {
        try{
            require(["app"] ,function(app){
                console.log("react-bootstrap loading...");

            })
            resolve("app");
        }catch(err){
            reject("app")
        }

    });
    return p;
}

require( ["q"],
    function (Q) {
        console.log("start..");
        Promise =Q.Promise;
        (function loadALL() {
             Q.all(
                 loadJQuery(),
                 loadReact(),
                 loadBaseframevendor(),
              
                // loadBootstrap(),
                loadApp()
            ).then(function (value){
                 loadRedux().then(function (value) {
                     console.log("loadBootstrap, ",value);
                 })

                $(".pos").remove();
                console.log("Loaded All");
            }).then(function (value) {
                 loadBootstrap().then(function (value) {
                     console.log("loadRedux, ",value);
                 })
             })
             .then(function (value) {
                 loadMaterialuivendor().then(function (value) {
                     console.log("loadMaterialuivendor, ",value);
                 })
             },function (value) {
                 
             });
        })();
        // try{
        //     require(["jquery-mobile"] ,function(jquerymobile){
        //         console.log("jquery-mobile loading...");
        //
        //     })
        // }catch(e){
        //     console.log("jquery-mobile error...")
        // }
        // try{
        //     require(["react"] ,function(react){
        //         console.log("react loading...");
        //
        //     })
        // }catch(e){
        //     console.log("react error...")
        // }
        // try{
        //     require(["baseframevendor"] ,function(react){
        //         console.log("baseframevendor loading...");
        //
        //     })
        //
        // }catch(e){
        //     console.log("Loading baseframevendor error")
        // }

        // try{
        //     require(["redux"] ,function(redux){
        //         console.log("redux loading..");
        //
        //     })
        // }catch(e){
        //     console.log("Loading redux error")
        // }
        // try{
        //     require(["materialuivendor"] ,function(redux){
        //         console.log("materialuivendor loading..");
        //
        //     })
        // }catch(e){
        //     console.log("Loading materialuivendor error.")
        // }
        // try{
        //     require(["react-bootstrap"] ,function(reactbootstrap){
        //         console.log("reactbootstrap loading..");
        //
        //
        //     })
        // }catch(e){
        //     console.log("Loading bootstrap error.")
        // }
        // try{
        //     require(["app"] ,function(app){
        //         console.log("app loading..");
        //         //$(".pos").remove();
        //     })
        // }catch(e){
        //     console.log("Loading app error.")
        // }
    });

