import React ,{PropTypes}from 'react';
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import {reduxForm,getFormValues} from 'redux-form';
import { browserHistory } from 'react-router'
import { push } from 'redux-router';

import international from '../../../abc-framework/international/internationalize'

import { preload,goto }            from '../../../abc-framework/react-isomorphic-render/redux'
import {Modal,Glyphicon,Grid,Row,Col,Thumbnail,Image,Button,Media} from '../../../abc-bootstrap'

import {AbcFormInline,AbcRow,AbcPanel,AbcButtonToolbarRight,AbcButton,
    AbcColRedFormA,AbcColRedFormB,AbcColRedFormC,
    AbcPanelHeaderTitleAndNumber as HeaderTitleAndNumber}
    from '../../../abc-ui/abc-ui-index'
import Spinner        from '../../../abc-ui/spinner'

//业务功能
import AuthenticationManager from './AuthenticationManager'
import {list} from'./formConfig'

export default class AuthenticationList extends React.Component {

    static propTypes =
    {
        //数据装载时，状态切换
        formConfig:PropTypes.object
    }

    static contextTypes =
    {
        intl: PropTypes.object,

    }

    static defaultProps =
    {
        formConfig:list.formConfig
    }

    render() {
        const authenticationListHeader=(<HeaderTitleAndNumber numbers="10" title="权限列表"/>);
        const authenticationAdimHeader=(<HeaderTitleAndNumber numbers="2" title="权限底数"/>);
        return (
            <AbcPanel  header={authenticationListHeader}
                       footer={authenticationAdimHeader}>
                <AuthenticationManager key="01" formConfig={this.props.formConfig}/>
                <AuthenticationManager key="02" formConfig={this.props.formConfig}/>
                <AuthenticationManager key="03" formConfig={this.props.formConfig}/>
                <AuthenticationManager key="04" formConfig={this.props.formConfig}/>
            </AbcPanel>

        )
    }

}