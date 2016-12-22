import routes  from '../routeres/Routes'
import wrapper from './wrapper'
// import reducer from '../reducers'
// import reducer from '../../todos/reducers/index'


// import Client from './Client'
export default
{

  reducer:() => require('../reducers/reducerindex'),

  routes,

  wrapper,

  on_store_created({ reload_reducer })
  {

    if (__DEVTOOLS__ && module.hot)
    {
      module.hot.accept('../reducers', reload_reducer)
    }
  }
}

