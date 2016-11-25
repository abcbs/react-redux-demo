import 'colors';
import express from 'express';
import httpProxy from 'http-proxy';
import ip from 'ip';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {match, RouterContext} from 'react-router';
import client from './Render';
import info from '../../abc-framework/utils/logger'
//压缩
import compression from 'compression';
const development = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const app = express();
const repoRoot = path.resolve(__dirname, '../../');

// which prevents the need for extensions
// app.set('view engine', 'jade');

// set views for error and 404 pages
// app.set('views', repoRoot + '/build');
var dist=path.join(repoRoot, '/dist');
var external=path.join(repoRoot, '/external');

var build=path.join(repoRoot, '/build');

app.use(compression());
info("dist,",dist);
info("external,",external);

app.use('/dist', express.static(dist));
app.use('/external', express.static(external));
app.use('/build', express.static(build));

app.use(client);
app.use(function(err, req, res, next){
    // log it
    if (!module.parent) console.error(err.stack);
    // error page
    if (err) {
        console.error(err)
    }

    res.status(500).end('Server Error or Loading');
});

app.listen(port, function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==>browser.", port, port)
    }
});
