import React,{ PropTypes,Component } from 'react';
import AbcContainer from '../../abc-framework/ui/AbcContainer'
import AbcPage from '../../abc-framework/ui/AbcPage'

// import Preloading      from '../../abc-ui/preloading'
// import Snackbar        from '../../abc-ui/snackbar'

import { title }              from 'react-isomorphic-render'
import { preload }            from 'react-isomorphic-render/redux'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'

import Spinner        from '../../abc-ui/spinner'
 import '../../../resource/styles/abc-components/styles/style.scss'

// fetches the list of users from the server
function fetchUsers()
{
    return {
        promise: http => http.get('/api/users').then(ids => Promise.map(ids, id => http.get(`/api/users/${id}`))),
        events: ['GET_USERS_PENDING', 'GET_USERS_SUCCESS', 'GET_USERS_FAILURE']
    }
}

@preload(({ dispatch }) => dispatch(fetchUsers))
@connect
(
    state    => ({ users: state.users.users }),
    dispatch => bindActionCreators({ fetchUsers }, dispatch)
)
export default class IntroductionPage extends Component
{
    static propTypes =
    {
        users      : PropTypes.array.isRequired,
        fetchUsers : PropTypes.func.isRequired
    }

    render() {
        return (
            <AbcPage title="展示互动" subTitle="欢迎光临">
                <AbcContainer>
                    <p>
                        <Spinner/>

                        Hello,商品介绍
                    </p>
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

