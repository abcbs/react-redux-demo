import { createStore, applyMiddleware,compose } from 'redux'
import {logger,loggerTwo} from './logger'

export default function createStoreWithMiddleWare (reducer){
    return applyMiddleware(logger, loggerTwo)(createStore);
}