//第三组件
import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';
import { pagination } from 'violet-paginator';
import {reducer as form} from 'redux-form';

import user_settings_main  from './user/settings/main'
import user_settings_change_password from './user/settings/changepassword'


export { default as user_profile }   from './user/profile'
export { default as block_user }     from './user/block'
export { default as authentication } from './authentication'

export { default as locale }         from './locale'
export { default as preload }        from './ui-reducers/preload'
export { default as snackbar }       from './ui-reducers/snackbar'
export { default as navigator }      from './ui-reducers/navigator'

import { default as authentication } from './authentication'
import { default as snackbar }       from './ui-reducers/snackbar'
import { default as navigator }      from './ui-reducers/navigator'
import { preload }        from './ui-reducers/preload'

const reducers = {
    routing: routerReducer,
    pagination,
    form,
    authentication,
    preload,
    navigator,
    snackbar,
    main: user_settings_main

};
export default reducers
