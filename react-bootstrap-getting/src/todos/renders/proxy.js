import 'colors';
import express from 'express';
import httpProxy from 'http-proxy';
import ip from 'ip';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {match, RouterContext} from 'react-router';
import client from './renders';
import info from '../framework/utils/logger'

const development = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const app = express();
const repoRoot = path.resolve(__dirname, '../../');

var dist=path.join(repoRoot, '/dist');
var external=path.join(repoRoot, '/external');
var build=path.join(repoRoot, '/build');
info("dist,",dist);
info("external,",external);
app.use('/dist', express.static(dist));
app.use('/external', express.static(external));
app.use('/build', express.static(build));

app.use(client);
app.listen(port, function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==>browser.", port, port)
    }
});
