import React ,{PropTypes}from 'react';
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import {reduxForm,initialize} from 'redux-form';

import { browserHistory } from 'react-router'
import { push } from 'redux-router';

import international from '../../../abc-framework/international/internationalize'
import { preload,goto }            from '../../../abc-framework/react-isomorphic-render/redux'

import container from '../../../abc-framework/ui/AbcPageContainer'
import errorInfo from '../../../abc-framework/ui/errorInfo'
import messages from '../../../abc-framework/messages/messages'

import {AbcFormInline,AbcRow,AbcPanel,AbcButtonToolbar,AbcButtonToolbarLeft,AbcButton,
    AbcColRedFormA,AbcColRedFormB,AbcColRedFormC,
    AbcPanelHeaderTitleAndNumber as HeaderTitleAndNumber}
    from '../../../abc-ui/abc-ui-index'

import authenticationValidation from './authentication-Validation';
import {addAuthenication} from '../actions/authentication-action'
import {user_manager_url} from '../../../abc-framework/routeres/ModuleURL'

import {Modal} from '../../../abc-bootstrap'


// function asyncValidateEmail(data, dispatch) {
//     if (!data.authCode) {
//         return Promise.resolve({});
//     }
//     return isValidEmail(data);
// }

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
    }else{
        // warnings.authName = {message:'',flag:"success"};
    }
    const authDecript=values.authDecript;
    warnings.authDecript = {message:'',flag:"default"};
    return warnings
}

@connect
(
    state    => {
        const authn=state.authentication||state.default.authentication;
        const users=authn.authentication.user;
        const example_users=state.example_users;

        let example_user={};
        if(example_users){
            example_user=     {
                    loading:example_users.loading,
                        loaded
                :
                    example_users.loaded,
                        loading_error
                :
                    example_users.loading_error,
                        adding_error
                :
                    example_users.adding_error
              };
            return  {
                users:users,
                example_user

            }
        }
        return
            {
                users:users

            }

    }
    ,
    dispatch => bindActionCreators({
        fetchUsers,
        addAuthenication,
        // asyncValidateEmail,
        initialize,
        push  },
        dispatch)
)
@reduxForm({
    form: 'authMangerForm',
    fields: {authName:"", authCode:"", authDecript:""},
    // onSubmit: serversubmit,
    validate: authenticationValidation,
    warn:warnAuthentication,
    // asyncValidate:asyncValidateEmail,
    // asyncValidate,
    // asyncBlurFields: ['authCode']
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

        initialize: PropTypes.func.isRequired,
        loading       : PropTypes.bool,
        loaded        : PropTypes.bool,
        loading_error : PropTypes.object,

        adding_error  : PropTypes.object,

        editStop: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func,
        invalid: PropTypes.bool.isRequired,
        pristine: PropTypes.bool.isRequired,
        save: PropTypes.func.isRequired,
        submitting: PropTypes.bool.isRequired,
        saveError: PropTypes.object,
        formKey: PropTypes.string.isRequired,
        values: PropTypes.object.isRequired
    }

    static contextTypes =
    {
        intl: PropTypes.object,
    }

    handleSubmit(form) {
        const values=form.currentTarget.form;
        const name=values.authName.value;
        const code=values.authCode.value;
        const descript=values.authDecript.value;
        const value={
            authName:name,
            authCode:code,
            authDecript:descript
        };
        // warnAuthentication(value);
        this.setState({
            forminfo: value
        });

        this.showModal();

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
            errorInfo( JSON.stringify(error))


        }
    }
    showModal() {
        this.setState({show: true});
    }

    commitData(){
        this.hideModal();
        this.addUser(this.state.forminfo)
    }
    hideModal() {
        this.setState({show: false,
        });
    }
    constructor(props, context) {
        super(props, context);
        this.initStates();
    }

    initStates(){
        this.state = {
            userName:"",
            password:"",
            userNameHelp: "",
            passwordHelp: "",
            show: true
        }
    }
    render() {
        const {handleSubmit, reset, pristine, submitting ,invalid,save,values,editStop} = this.props;
        const userSearchHeader=(<HeaderTitleAndNumber numbers="17" title="权限"/>);
        return (
            <div>
                <AbcPanel header={userSearchHeader}>
                    <AbcFormInline  id="authMangerForm" name="authMangerForm">
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
                            <AbcButton type="button"  onClick={this.handleSubmit.bind(this)}
                                       disabled={pristine || invalid || submitting}>确定</AbcButton>
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
