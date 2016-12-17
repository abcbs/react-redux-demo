import React ,{PropTypes}from 'react';
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'
import { push } from 'redux-router';

import { defineMessages }              from 'react-intl'

import international from '../../../abc-framework/international/internationalize'
import { preload,goto }            from '../../../abc-framework/react-isomorphic-render/redux'
// import AbcContainer from '../../../abc-framework/ui/AbcContainer'
// import AbcPage from '../../../abc-framework/ui/AbcPage'
import container from '../../../abc-framework/ui/AbcPageContainer'
import errorInfo from '../../../abc-framework/ui/errorInfo'

import {Label,Badge,ButtonToolbar,Button,Checkbox,Col,Row ,Panel} from '../../../abc-bootstrap'
import {FormGroup, ControlLabel, HelpBlock,FormControl,Form} from '../../../abc-bootstrap'

import {AbcLabel,AbcBadge,AbcButton,AbcButtonToolbar,AbcFormInline,AbcCol,
    AbcFormGroup,AbcFormControl,AbcDefaultButton

} from '../../../abc-ui/abc-ui-index'
import 'bootstrap/less/theme.less'
import 'bootstrap/less/bootstrap.less';
import UserSearchHeader from '../components/PanelHeaderTitleAndNumber'

function fetchUsers()
{
    // console.log("http,",http);
    return {
        promise: http => http.get('/api/users/current').then(
            ids =>
                console.log("ids,",ids),
            (err=>{
                    console.log("没有网络，或者网络过慢，请稍等再试,",err);
                    errorInfo(" 没有网络，或者网络过慢，请稍等再试")
                    throw new Error("Final,NO Net");
                }
            )
        ),
        events: ['GET_USERS_PENDING', 'GET_USERS_SUCCESS', 'GET_USERS_FAILURE']
    }
}

const messages = defineMessages
({
        title:
        {
            id             : 'user.title',
            description    : '用户主页，包括用户的增删改查，权限的增删改查，用户图像的修改，后端存储采用mysql',
            defaultMessage : '用户管理'
        },
        subTitle:
        {
            id             : 'user.subTitle',
            description    : '首页子标题',
            defaultMessage : '用户维护信息'
        }
    }
)

@connect
(
    state    => {
        const authn=state.authentication||state.default.authentication;
        const users=authn.authentication.user;
        return
        { users:users }
    }
    ,
    dispatch => bindActionCreators({ fetchUsers,
        push  }, dispatch)
)
@preload(({ dispatch }) => dispatch(fetchUsers()))
@international()
@container({title:messages.title, subTitle:messages.subTitle})
export default class UserPage extends React.Component {
    static propTypes =
    {
        users      : PropTypes.array,
        fetchUsers : PropTypes.func,
        loading       : PropTypes.bool,
        loaded        : PropTypes.bool,
        loading_error : PropTypes.object
    }
    static contextTypes =
    {
        intl: PropTypes.object,
        // router: React.PropTypes.object
    }
    constructor(props, context) {
        super(props, context);
        this.initStates();
    }

    handleClick(e) {
        console.log("e,",e.target.value);
        browserHistory.push("/app")
    }

    validatedStateUserName() {
        const length = this.state.userName.length;;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length >= 0) return 'error';
    }

    handleChangeUserName(e) {
        this.setState({userName: e.target.value});
        if(this.validatedStateUserName()==='success'){
            //由事件机制提交到操作
            this.setState({
                userNameHelp: ""
            });
        }else{
            this.setState({
                userNameHelp: "* 姓名不能为空,长度大于8,目前长度:".concat(this.state.userName.length)
            });
            return ;
        }

    }

    validatedStatePassword() {
        const length = this.state.password.length;;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length >= 0) return 'error';
    }

    handleChangePassword(e){
        this.setState({password: e.target.value});
        if(this.validatedStatePassword()==='success'){
            this.setState({
                passwordHelp: ""
            });
        }else{
            this.setState({
                passwordHelp: "* 密码不能为空,长度大于8,目前长度:".concat(this.state.passwordHelp.length)
            });
            return ;
        }
    }
    initStates(){
        this.state = {
            userName:"",
            password:"",
            userNameHelp: "",
            passwordHelp: "",
        }
    }
    render() {
        //var root=$&&$("root");
        //label-primary-bg
        // const { translate } = this.props;
        // const title=translate(messages.title);
        // <span style={{lineHeight: '40px'}}>
        //                 手机      平板         笔记本     台式
        //Class 前缀	.col-xs-	.col-sm-	.col-md-	.col-lg-
        const userSearchHeader=(<UserSearchHeader numbers="17" title="用户查询"/>)
        return (
            <div>
                <Panel header={userSearchHeader}>
                <AbcFormInline onSubmit={this.handleClick.bind(this)}>
                 <AbcCol xs={5} sm={6} md={7} lg={4}>
                    <AbcFormGroup controlId="userName"
                                  validationState={this.validatedStateUserName()}>
                      <AbcFormControl type="text"
                                       value={this.state.userName}
                                        ref="userName"
                                        placeholder="Must Enter userName"
                                        onChange={this.handleChangeUserName.bind(this)}
                                      />
                        <AbcFormControl.Feedback />
                        <HelpBlock>
                            <span>{this.state.userNameHelp}</span>
                        </HelpBlock>

                    </AbcFormGroup>
                 </AbcCol>
                <AbcCol xs={5} sm={4} md={3} lg={4}>
                    <AbcFormGroup validationState={this.validatedStatePassword()}>
                      <AbcFormControl type="text"
                                      value={this.state.password}
                                      ref="password"
                                      onChange={this.handleChangePassword.bind(this)}
                                      placeholder="Must Enter password"/>
                      <FormControl.Feedback />
                      <HelpBlock>
                          <span>{this.state.passwordHelp}</span>
                      </HelpBlock>

                     </AbcFormGroup>
                </AbcCol>
                <AbcCol  sm={2} md={3} lg={3} xsHidden ={true} smHidden ={true} mdHidden ={true} >
                    <AbcFormGroup validationState={this.validatedStateUserName()}>
                        <AbcFormControl type="text" placeholder="sex"/>
                        <FormControl.Feedback />
                        <HelpBlock></HelpBlock>

                    </AbcFormGroup>
                </AbcCol>
                <AbcCol xs={2} sm={2} md={2} lg={1}>
                     <AbcFormGroup>
                           <AbcButton bsStyle="primary" type="submit">确定</AbcButton>
                           <FormControl.Feedback />
                           <HelpBlock></HelpBlock>
                     </AbcFormGroup>
                </AbcCol>
             </AbcFormInline>
            </Panel>
            <Panel header="测试页">
                <Checkbox onClick={this.handleClick.bind(this)}></Checkbox>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <AbcLabel>test-AbcLabel</AbcLabel>

            <span>
              <AbcDefaultButton type="button">
                  确定
               </AbcDefaultButton><AbcBadge>4</AbcBadge>
             </span>
            <AbcButtonToolbar>
                Messages<AbcBadge>17</AbcBadge>
            </AbcButtonToolbar>
            </Panel>
            <Panel header="Panel heading without title">
                    test
            </Panel>
        </div>
        );
    }
   
}
