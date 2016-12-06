import React,{ PropTypes,Component } from 'react';
import AbcContainer from '../../abc-framework/ui/AbcContainer'
import AbcPage from '../../abc-framework/ui/AbcPage'

// import Preloading      from '../../abc-ui/preloading'
// import Snackbar        from '../../abc-ui/snackbar'

import { title }              from '../../abc-framework/react-isomorphic-render/index.es6'
import { preload }            from '../../abc-framework/react-isomorphic-render/redux'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button,ButtonToolbar} from 'react-bootstrap'
// import 'bootstrap/less/theme.less'
// import 'bootstrap/less/bootstrap.less';

import Spinner        from '../../abc-ui/spinner'
 import '../../../resource/styles/abc-components/styles/style.scss'

// fetches the list of users from the server
function fetchUsers()
{
    // console.log("http,",http);
    return {
        promise: http => http.get('/api/users/current').then(
            ids => console.log("idx,",ids)
        ),
        events: ['GET_USERS_PENDING', 'GET_USERS_SUCCESS', 'GET_USERS_FAILURE']
    }
}
//
// @preload(({ dispatch }) => dispatch(fetchUsers))
@connect
(
    state    => {
        //.default.authentication.authentication
        const authn=state.authentication||state.default.authentication;
        const users=authn.authentication.user;
        return
            { users:users }
    }
    ,
    dispatch => bindActionCreators({ fetchUsers }, dispatch)
)
export default class IntroductionPage extends Component
{
    static propTypes =
    {
        users      : PropTypes.array.isRequired,
        fetchUsers : PropTypes.func.isRequired
    }
    handleClick(e) {
        console.log("e,",e.target.value);
        this.props.fetchUsers();
    }
    render() {
        return (
            <AbcPage title="展示互动" subTitle="欢迎光临">
                <AbcContainer >
                    {
                        //没有定位，导致事件无效
                    }
                    <span style={{ position: 'absolute' ,display:'inline-block'}}>
                        <Spinner/>
                        Hello,商品介绍,Hello,商品介绍
                        <div>
                            <Button onClick={
                                    this.handleClick.bind(this)}
                            >Refresh</Button>
                        </div>
                    </span>


                </AbcContainer>
            </AbcPage>
        );
    }

    async deleteUsers()
    {
        try
        {
            const count = await this.props.deleteUsers()
            alert(`Deleted ${count} users`)
        }
        catch (error)
        {
            alert(error)
        }
    }
}

