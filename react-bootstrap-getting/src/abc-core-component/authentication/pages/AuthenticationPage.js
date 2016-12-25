import React ,{PropTypes}from 'react';
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import {reduxForm,getFormValues} from 'redux-form';

import { browserHistory } from 'react-router'
import { push } from 'redux-router';

import international from '../../../abc-framework/international/internationalize'
import { preload,goto }            from '../../../abc-framework/react-isomorphic-render/redux'

import container from '../../../abc-framework/ui/AbcPageContainer'
import errorInfo from '../../../abc-framework/ui/errorInfo'
import messages from '../../../abc-framework/messages/messages'
import Spinner        from '../../../abc-ui/spinner'
import {AbcFormInline,AbcRow,AbcPanel,AbcButtonToolbar,AbcButtonToolbarLeft,AbcButton,
    AbcColRedFormA,AbcColRedFormB,AbcColRedFormC,
    AbcPanelHeaderTitleAndNumber as HeaderTitleAndNumber}
    from '../../../abc-ui/abc-ui-index'

import {user_manager_url} from '../../../abc-framework/routeres/ModuleURL'
import {Modal} from '../../../abc-bootstrap'

//业务功能实现
import authenticationValidation from './authentication-Validation';
import {addAuthenication,simulateAuthenicationData} from '../actions/authentication-action'

function fetchUsers()
{
    return {
        promise: http => http.get(user_manager_url).then(
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

const warnAuthentication = values => {
    const warnings = {}
    const authName=values.authName;
    if (authName&&authName.length > 19) {
        warnings.authName = {message:'名称字段小于19',flag:"warning"};
    }
    const authDecript=values.authDecript;
    warnings.authDecript = {message:'',flag:"default"};
    return warnings
}

@connect
(
    state    => {
        //权限数据
        const authn=state.authentication;
        const users=authn.authentication.user;
        //
        const authenticationServer=state.authenticationServer
        return(
        {
           users:users,
            //模拟数据
           initialValues: state.authenticationClient.data,
            adding: authenticationServer.adding
          })

    }
    ,
    dispatch => bindActionCreators({
        fetchUsers,
        addAuthenication,
        // asyncValidateEmail,
        simulate:simulateAuthenicationData,
        push  },
        dispatch)
)
@reduxForm({
    form: 'authMangerForm',
    validate: authenticationValidation,
    warn:warnAuthentication,
})

@preload(({ dispatch }) => dispatch(fetchUsers()))
@international()
@container({title:messages.authentication.title,
    subTitle:messages.authentication.subTitle})
export default class AuthenticationPage extends React.Component {
    static propTypes =
    {
        users      : PropTypes.array,
        fetchUsers : PropTypes.func,
        //数据装载时，状态切换
        adding       : PropTypes.bool,
        loading_error : PropTypes.object,
        adding_error  : PropTypes.object,


    }

    static contextTypes =
    {
        intl: PropTypes.object,

    }

    handleSubmitform(form) {

        const values=form.currentTarget.form;

        const name=values.authName.value;
        const code=values.authCode.value;
        const descript=values.authDecript.value;

        const value={
            authName:name,
            authCode:code,
            authDecript:descript
        };
        this.setState({
            forminfo: value
        });
        // const formValues =  handle();
        this.setState({
            forminfo: formValues
        });
        this.showModal();

    }

    //数据提交方法
    handleSubmit() {
        const handle=this.props.handleSubmit(data => {
            return data;
        });
        const formValues =  handle();
        this.setState({
            forminfo: formValues
        });
        this.showModal();
    }

    //提交数据到服务端
    commitData(){
        this.hideModal();
        this.addUser(this.state.forminfo)
    }

    async addUser(authenication)
    {
        try
        {
            await this.props.addAuthenication(authenication);
        }
        catch (error)
        {
            console.log('error,',error)
            errorInfo( JSON.stringify(error.data||error))
        }
    }
    //模式框控制方法
    showModal() {
        this.setState({show: true});
    }

    hideModal() {
        this.setState({show: false,
        });
    }
    //
    constructor(props, context) {
        super(props, context);
        this.initStates();
    }

    initStates(){
        this.state = {
            show: true
        }
    }
    render() {
        const {handleSubmit,reset, pristine, submitting ,invalid,...others} = this.props;
        const userSearchHeader=(<HeaderTitleAndNumber numbers="17" title="权限"/>);
        return (
            <div>
                <AbcPanel header={userSearchHeader}>
                    <AbcFormInline
                                    // id="authMangerForm"
                                    // name="authMangerForm"
                                    onSubmit={this.handleSubmit.bind(this)}
                    >
                        <AbcRow>
                            <AbcColRedFormA  
                                name="authName"
                                controlId="authName"
                                type='text'
                                label='名称'
                                placeholder='权限名称'/>
                            <AbcColRedFormB 
                                name ="authCode" 
                                controlId="authCode"
                                type="text"
                                ref="authCode"
                                label="编码"
                                placeholder="权限编码"
                            />
                            <AbcColRedFormC controlId="authDecript"
                                name="authDecript"
                                type="text"
                                ref="authDecript"
                                label="描述"
                                placeholder="描述信息"
                            />

                        </AbcRow>
                        <AbcButtonToolbarLeft>
                            {
                                this.props.adding&&<Spinner/>
                            }
                            <AbcButton type="button"
                                       onClick={this.handleSubmit.bind(this)}
                                       disabled={pristine || invalid || submitting}>确定</AbcButton>
                            <AbcButton type="button"
                                       onClick={handleSubmit(data => {
                                                    console.log(data);
                                                }
                                            )
                                       }
                                       disabled={pristine || invalid || submitting}>直接提交</AbcButton>
                            <AbcButton type="button"
                                       // onClick={this.props.simulate(require('./data.json'))}
                                       onClick={
                                            () => others.simulate(require('./data.js').data)
                                       }
                                        >模拟</AbcButton>
                                 <AbcButton type="button"  disabled={pristine || submitting}
                                       onClick={reset}>重置</AbcButton>
                        </AbcButtonToolbarLeft>
                    </AbcFormInline>
                </AbcPanel>
                 {this.state.forminfo&&
                         <Modal
                            show={this.state.show}
                            onHide={this.hideModal.bind(this)}
                             style={{marginTop:"30px"}}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-xs">提交信息</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                { JSON.stringify(this.state.forminfo)}
                            </Modal.Body>
                            <Modal.Footer>
                                <AbcButton onClick={this.commitData.bind(this)}>提交</AbcButton>
                            </Modal.Footer>
                        </Modal>
                 }

            </div>
        );
    }

}
