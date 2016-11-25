//第三组件
import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';
import { pagination } from 'violet-paginator';
import {reducer as form} from 'redux-form';

const reducers = {
    routing: routerReducer,
    pagination,
    form

};
export default reducers
