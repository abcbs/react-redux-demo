import React ,{PropTypes}from 'react';
import AbcContainer from '../../abc-framework/ui/AbcContainer'
import AbcPage from '../../abc-framework/ui/AbcPage'
import {Label,Badge,ButtonToolbar,Button,Checkbox} from '../../abc-bootstrap'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import 'bootstrap/less/theme.less'
import 'bootstrap/less/bootstrap.less';
import { defineMessages }              from 'react-intl'

import international from '../../abc-framework/international/internationalize'

function fetchUsers()
{
    // console.log("http,",http);
    return {
        promise: http => http.get('/api/users/current').then(
            ids =>
               console.log("ids,",ids)
        ),
        events: ['GET_USERS_PENDING', 'GET_USERS_SUCCESS', 'GET_USERS_FAILURE']
    }
}

const messages = defineMessages
({
    title:
    {
        id             : 'home.title',
        description    : '首页配置',
        defaultMessage : '首页'
    },
    subTitle:
        {
            id             : 'home.subTitle',
            description    : '首页子标题',
            defaultMessage : '欢迎光临'
     }
}
)

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
@international()
export default class HomePage extends React.Component {
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
        //var root=$&&$("root");
        //label-primary-bg
        const { translate } = this.props;
        const title=translate(messages.title);
        return (
            <AbcPage title={translate(messages.title)}
                     router="home"
                     subTitle={translate(messages.subTitle)} >
                    <AbcContainer>
                        <span style={{ position: 'absolute' ,display:'inline-block'}}>
                            <Checkbox onClick={this.handleClick.bind(this)}></Checkbox>
                            <input type="checkbox"/>
                            <input type="checkbox"/>
                            <input type="checkbox"/>
                            <Label bsStyle="abc" bsSize="bg">test</Label>
                            {
                                // this.props.translate("home.title")
                            }
                            <span>
                             <Button type="button" bsStyle="default" style={{display:'inline'}}>
                             确定
                            </Button><Badge bsStyle="info" bsSize="abc">4</Badge>
                                </span>
                            <ButtonToolbar style={{ position: 'relative'}}>
                                Messages<Badge bsStyle="abc">17</Badge>
                                </ButtonToolbar>

                             <Button onClick={
                                    this.handleClick.bind(this)}>Refresh</Button>
                            </span>
                    </AbcContainer>

            </AbcPage>
        );
    }
}
