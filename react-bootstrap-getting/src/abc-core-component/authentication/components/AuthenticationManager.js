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
import {AbcFormInline,AbcRow,AbcPanel,AbcButtonToolbarRight,AbcButton,
    AbcColRedFormA,AbcColRedFormB,AbcColRedFormC,
    AbcPanelHeaderTitleAndNumber as HeaderTitleAndNumber}
    from '../../../abc-ui/abc-ui-index'

import {user_manager_url} from '../../../abc-framework/routeres/ModuleURL'
import {Modal,Glyphicon} from '../../../abc-bootstrap'

//业务功能实现
import authenticationValidation from '../pages/authentication-Validation';
import {addAuthenication,simulateAuthenicationData} from '../actions/authentication-action'
import {manager} from './formConfig';

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
        //
        const authenticationServer=state.authenticationServer
        return(
        {
            initialValues: state.authenticationClient.data,
            adding: authenticationServer.adding
        })

    }
    ,
    dispatch => bindActionCreators({
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
@international()
export default class AuthenticationManager extends React.Component {
    static propTypes =
    {
        //数据装载时，状态切换
        adding       : PropTypes.bool,
        loading_error : PropTypes.object,
        adding_error  : PropTypes.object,
        formConfig:PropTypes.object
    }

    static contextTypes =
    {
        intl: PropTypes.object,

    }

    static defaultProps =
    {
        formConfig:manager.formConfig
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
        this.addAuthenication(this.state.forminfo)
    }

    async addAuthenication(authenication)
    {
        try
        {
            await this.props.addAuthenication(authenication);
        }
        catch (error)
        {
            errorInfo( JSON.stringify(error.data||error))
        }
    }
    //模式框控制方法
    showModal() {
        this.setState({show: true});
    }

    hideModal() {
        this.setState({show: false,});
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
        const abcButtonToolbarRight=(<AbcButtonToolbarRight>
            {
                this.props.adding&&<Spinner/>
            }
            <AbcButton type="button"
                       onClick={this.handleSubmit.bind(this)}
                       disabled={pristine || invalid || submitting||this.props.adding}>
                确定
            </AbcButton>
            <AbcButton type="button"
                // onClick={this.props.simulate(require('./data.json'))}
                onClick={
                     () => others.simulate(require('../pages/data.js').data)
                 }
            >模拟</AbcButton>
            <AbcButton type="button"  disabled={pristine || submitting}
                       onClick={reset}>重置</AbcButton>
        </AbcButtonToolbarRight>)
        const abcButtonToolbarRightGlyphs=(
            <AbcButtonToolbarRight>
                {
                    this.props.adding&&<Spinner/>
                }
                <AbcButton type="button" bsStyle="abc"
                           onClick={this.handleSubmit.bind(this)}
                           disabled={pristine || invalid || submitting||this.props.adding}>
                    <Glyphicon glyph="save"/>
                </AbcButton>
                <AbcButton type="button" bsStyle="abc"
                           onClick={() => others.simulate(require('../pages/data.js').data)}
                ><Glyphicon glyph="import"/>
                </AbcButton>
                <AbcButton type="button"  bsStyle="abc"
                           disabled={pristine || submitting}
                           onClick={reset}><Glyphicon glyph="erase"/></AbcButton>
            </AbcButtonToolbarRight>)
        return (
            <div>
                <AbcPanel
                    header={userSearchHeader}
                    footer={abcButtonToolbarRightGlyphs}
                >
                    <AbcFormInline>
                        <AbcRow>
                            <AbcColRedFormA
                                name="authName"
                                controlId="authName"
                                type='text'
                                label='名称'
                                readonly={ this.props.formConfig.authName&& this.props.formConfig.authName.readonly}
                                displayLabel={ this.props.formConfig.authName&&this.props.formConfig.authName.displayLabel}
                                placeholder='权限名称'/>
                            <AbcColRedFormB
                                name ="authCode"
                                controlId="authCode"
                                type="text"
                                ref="authCode"
                                readonly={ this.props.formConfig.authCode&& this.props.formConfig.authCode.readonly}
                                displayLabel={ this.props.formConfig.authCode&& this.props.formConfig.authCode.displayLabel}
                                label="编码"
                                placeholder="权限编码"
                            />
                            <AbcColRedFormC controlId="authDecript"
                                            name="authDecript"
                                            type="text"
                                            ref="authDecript"
                                            label="描述"
                                            readonly={ this.props.formConfig.authDecript
                                                        && this.props.formConfig.authDecript.readonly}
                                            displayLabel={ this.props.formConfig.authDecript&&
                                                        this.props.formConfig.authDecript.displayLabel}
                                            placeholder="描述信息"
                            />

                        </AbcRow>
                        {
                            abcButtonToolbarRight
                        }
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
