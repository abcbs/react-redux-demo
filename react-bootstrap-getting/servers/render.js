var express = require('express');

import path from 'path';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterApp from './reducers';
import App from './containers/App';

var app = new (require('express'))();


// 每当收到请求时都会触发
app.use(handleRender);

// 接下来会补充这部分代码
function handleRender(req, res) { /* ... */ }
function renderFullPage(html, initialState) { /* ... */ }
