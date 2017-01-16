import React ,{PropTypes}from 'react';
import ReactDOM from 'react-dom';

import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import {reduxForm,getFormValues} from 'redux-form';
import { browserHistory } from 'react-router'
import { push } from 'redux-router';

import international from '../../../abc-framework/international/internationalize'

import { preload,goto }            from '../../../abc-framework/react-isomorphic-render/redux'
import {Modal,Glyphicon,Grid,Row,Col,Thumbnail,
    Image,Button,Media,Checkbox,ButtonToolbar,FormControl,Table} from '../../../abc-bootstrap'

import {AbcFormInline,AbcRow,AbcPanel,AbcButtonToolbarRight,AbcButton,
    AbcColRedFormA,AbcColRedFormB,AbcColRedFormC,
    AbcPanelHeaderTitleAndNumber as HeaderTitleAndNumber}
    from '../../../abc-ui/abc-ui-index'

import AbcTableTop2Bottom3,{AbcListRow4,AbcListRow2}        from './AbcTableListGridFrame'

import AbcTableLeft1Right2Row2,{AbcTableLeft1Right2Row2RightText} from './AbcTableInRow'

import AbcTableLeft1RightsTop2Bottom2,{AbcTableLeft1RightsTop1Bottom1,
    AbcTableTop2Bottom4,AbcTableSingleCol,AbcTableSingleLeftImageColCol,
    AbcTableLeft1RightsTop2Bottom3,AbcTableLeft1RightsTop1Bottom2Simple,
    AbcTableLeft1RightsTop1Bottom1Simple,AbcTableLeft1RightsTop1Bottom1LeftSimple,
    AbcTableLeft1RightsTop1Bottom2} from './AbcTable-Left-RightsTopBottom'
//业务功能
// import AuthenticationManager from './AuthenticationManager'
// import {list} from'./formConfig'

export default class ListTableSample extends React.Component {

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
        // formConfig:list.formConfig
    }

    handleClick(){
        const node=this.refs.productListHeader;
        const x = ReactDOM.findDOMNode(node);
        console.log("test,",x)
    }

    render() {

        const tableSampleHeader=(<HeaderTitleAndNumber numbers="3,3,3,3" title="样式示例"/>);
        const tableTodayHotHeader=(<HeaderTitleAndNumber numbers="1-2" title="抢购"/>);
        const productEtrHeader=(<HeaderTitleAndNumber numbers="右图" title="电器"/>);
        const productleHeader=(<HeaderTitleAndNumber numbers="3,3,3,3" title="固定宽度"/>);
        const tableGroupHotHeader=(<HeaderTitleAndNumber numbers="上下" title="促销"/>);
        const  productTaobaoHeader=(<HeaderTitleAndNumber numbers="右图" title="淘宝抢购"/>);
        const  priceButtomHeader=(<HeaderTitleAndNumber numbers="1-3/1-3" title="超实惠"/>);
        const tianMaoHeader=(<HeaderTitleAndNumber numbers="3,3,3,3" title="天猫必逛"/>);
        const coomonVenderHeader=(<HeaderTitleAndNumber numbers="1,2,2" title="普通商户-默认显示"/>);
        const  priceTopHeader=(<HeaderTitleAndNumber numbers="每行三个" title="Top10"/>);
        const  priceReadyHeader=(<HeaderTitleAndNumber numbers="1-3/1-3" title="预热"/>);
        const tianMDHeader=(<HeaderTitleAndNumber numbers="2-3" title="天猫"/>);
        const coomonVenderHeader1=(<HeaderTitleAndNumber numbers="1-2" title="普通商户-Toolbar"/>);
        const coomonVenderHeader2=(<HeaderTitleAndNumber numbers="1-2" title="普通商户-徽章"/>);
        const coomonVenderHeader3=(<HeaderTitleAndNumber numbers="1-2" title="普通商户无说明"/>);
        const coomonVenderHeader4=(<HeaderTitleAndNumber numbers="1-2" title="普通商户-左侧图右侧文字"/>);
        const coomonVenderHeader5=(<HeaderTitleAndNumber numbers="1-2" title="普通商户-默认显示"/>);
        
        const rowProducts=require('./demo-data').rowProducts;
        const rowProducts24=require('./demo-data').rowProducts24;
        const rowProducts14=require('./demo-data').rowProducts14;
        const rowProductsTop=require('./demo-data').smProducts;
        const rowProducts12=require('./demo-data').rowProducts12;
        const rowProducts7=require('./demo-data').rowProducts7;
        const rowProducts16=require('./demo-data').rowProducts16;
        const rowProducts13=require('./demo-data').rowProducts13;
        const rowProductsSingle=require('./demo-data').rowProductsSingle;
        return (
            <AbcPanel>
                {
                    //
                }
                <AbcListRow2  header={priceTopHeader} smProducts={rowProductsTop}/>
                {
                    //
                }
                <AbcTableSingleLeftImageColCol header={coomonVenderHeader5} rowProducts={rowProductsSingle} />
                {
                    //
                }
                <AbcTableSingleCol  header={coomonVenderHeader5} rowProducts={rowProductsSingle} />
                {
                    //
                }
                <AbcTableLeft1RightsTop1Bottom1LeftSimple header={tableTodayHotHeader} rowProducts={rowProducts12} />
                {
                    //
                }
                <AbcTableLeft1RightsTop1Bottom1Simple header={tableTodayHotHeader} rowProducts={rowProducts12} />
                {
                    //
                }
                <AbcTableLeft1RightsTop1Bottom2Simple header={productEtrHeader} rowProducts={rowProducts13}/>
                {
                    //1-1-2左边一个格子，右上一个下面两个
                }
                <AbcTableLeft1RightsTop1Bottom2 header={productTaobaoHeader} rowProducts={rowProducts13}/>
                {
                    //左边一个，右边上下各两个格子
                }
                <AbcTableLeft1RightsTop2Bottom3 header={coomonVenderHeader} rowProducts={rowProducts7}/>
                {
                    //2-4
                }
                <AbcTableTop2Bottom4 header={tianMaoHeader} rowProducts={rowProducts16}/>
                {
                    //左边一个，右边上下各一个
                }
                <AbcTableLeft1RightsTop1Bottom1 header={tableGroupHotHeader} rowProducts={rowProducts12}/>
                {
                    //每列均等四个
                }
                <AbcListRow4 header={priceTopHeader} smProducts={rowProductsTop}/>
                {
                    //左边一个，右边上下各两个格子
                }
                <AbcTableLeft1RightsTop2Bottom2 header={coomonVenderHeader} rowProducts={rowProducts14}/>
                {
                    //左边一个,右边两个
                }
                <AbcTableLeft1Right2Row2RightText header={coomonVenderHeader4} rowProducts={rowProducts24}/>
                {
                    //上两个下边三个
                }
                <AbcTableTop2Bottom3 header={tianMDHeader} rowProducts={rowProducts}/>
                {
                    //左一右边两个
                }
                <AbcTableLeft1Right2Row2 header={coomonVenderHeader1} rowProducts={rowProducts24} tableType={1}/>
                <AbcTableLeft1Right2Row2 header={coomonVenderHeader2} rowProducts={rowProducts24} tableType={2}/>
                <AbcTableLeft1Right2Row2 header={coomonVenderHeader3} rowProducts={rowProducts24} tableType={3}/>
                <AbcTableLeft1Right2Row2 header={coomonVenderHeader5} rowProducts={rowProducts24}/>
            </AbcPanel>
        )
    }

}