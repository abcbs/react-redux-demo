
import path from 'path'
// import fs   from 'fs-extra'
import configuration from '../../abc-config/config-server'
import global_variables from '../../abc-config/global-variables'
import  endsWith from  'lodash/endsWith'
global._development_ = process.env.NODE_ENV !== 'production';
global._production_ = !global._development_;

// Promise.all(fs);
String.ends_with=String.ends_with||endsWith;
String.prototype.startsWith=String.prototype.startsWith||endsWith;
global.Root_folder = path.join(__dirname, '..');

global.knexfile = false;
global.configuration = configuration;

for (let key of Object.keys(global_variables))
{
    global[key] = global_variables[key]
}

global.address_book = {};

for (let key of Object.keys(global.configuration))
{
    if (!String.ends_with.call(key,'_server') && !String.ends_with.call(key,'_service'))
    {
        continue
    }

    const value = global.configuration[key];

    if (is_object(value) && is_object(value.http) && value.http.host && value.http.port)
    {
        global.address_book[key] = `http://${value.http.host}:${value.http.port}`
    }
}

global.wait_for_stores = function(stores, then)
{
    return Promise.all(stores.map(
                store =>{
                    const ready=store.ready||store.default.ready;
                    return ready()
                }
            )
        )
        .then(then)
        .catch((error) =>
        {
            console.log("error,",error);
            process.exit(1)
        })
}