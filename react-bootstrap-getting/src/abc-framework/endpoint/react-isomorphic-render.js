import routes  from '../routeres/Routes'
import wrapper from './wrapper'
import Client from './Client'
export default
{
  // Redux reducer
  // (either an object or a function returning an object)
  reducer: () => require('../reducers'),

  // React-router routes
  // (either a `<Route/>` element or a `function({ store })` returning a `<Route/>` element)
  routes,

  // Wraps React page component with arbitrary elements (e.g. <Provider/>, etc; see an example below)
  wrapper:Client,
  //wrapper:(initialState,data)=(<Client data={initialState} messages={data}/>),

  on_store_created({ reload_reducer })
  {

    if (__DEVTOOLS__ && module.hot)
    {
      module.hot.accept('../reducers', reload_reducer)
    }
  }
}

