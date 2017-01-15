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

import AbcTableTop2Bottom3        from './AbcTableTopBottom'

//业务功能
// import AuthenticationManager from './AuthenticationManager'
// import {list} from'./formConfig'

export default class ProductAbstract extends React.Component {

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
        const coomonVenderHeader=(<HeaderTitleAndNumber numbers="4,4,6,6" title="普通商户"/>);
        const  priceTopHeader=(<HeaderTitleAndNumber numbers="1-3/1-3" title="Top10"/>);
        const  priceReadyHeader=(<HeaderTitleAndNumber numbers="1-3/1-3" title="预热"/>);
        const tianMDHeader=(<HeaderTitleAndNumber numbers="2-3" title="天猫"/>);
        const rowProducts=require('./demo-data').rowProducts;
        return (
            <AbcPanel>
                <AbcPanel  header={tianMaoHeader}>
                    <Grid className="container-list-abc">
                        <Col xs={12} xp={6} sm={6} md={6}  lg={4}>
                            <Table className="abc-table" cellspacing="1px" cellPadding="0">
                                <tr align="center">
                                    <td colSpan="2" className="td-1-2">
                                        <div className="abc-content-lg-top">
                                            <div className="abc-content">
                                                <h5>公开部分大西北区</h5>
                                                <p>每列三个上下架构</p>
                                            </div>
                                            <ButtonToolbar className="abc-toolbar">
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="pencil"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="trash"/></Button>
                                            </ButtonToolbar>
                                            <Image
                                                className="image-top"
                                                src="/external/images/-1562635978.jpg">
                                            </Image>
                                        </div>
                                    </td>
                                    <td colSpan="2" className="td-1-2">
                                        <div className="abc-content-lg-top">
                                            <div className="abc-content">
                                                <h5>公开部分大西北区</h5>
                                                <p>每列三个上下架构</p>
                                            </div>
                                            <ButtonToolbar className="abc-toolbar">
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="pencil"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="trash"/></Button>
                                            </ButtonToolbar>
                                            <Image
                                                className="image-top"
                                                src="/external/images/1069629669.jpg">
                                            </Image>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>爱逛街</h5>
                                                    <p>流行的好品味</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/-1532917364.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>必买单</h5>
                                                    <p>都伴您整理好了</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/465430911.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>爱逛街</h5>
                                                    <p>流行的好品味</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/944876135.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>必买单</h5>
                                                    <p>都伴您整理好了</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/-1532917364.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                </tr>

                            </Table>
                        </Col>
                        <Col xs={12} xp={6} sm={6} md={6}  lg={4}>
                            <Table className="abc-table" cellspacing="1px" cellPadding="0">
                                <tr align="center">
                                    <td colSpan="2" className="td-1-2">
                                        <div className="abc-content-lg-top">
                                            <div className="abc-content">
                                                <h5>公开部分大西北区</h5>
                                                <p>每列三个上下架构</p>
                                            </div>
                                            <ButtonToolbar className="abc-toolbar">
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="pencil"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="trash"/></Button>
                                            </ButtonToolbar>
                                            <Image
                                                className="image-top"
                                                src="/external/images/766934548.jpg">
                                            </Image>
                                        </div>
                                    </td>
                                    <td colSpan="2" className="td-1-2">
                                        <div className="abc-content-lg-top">
                                            <div className="abc-content">
                                                <h5>公开部分大西北区</h5>
                                                <p>每列三个上下架构</p>
                                            </div>
                                            <ButtonToolbar className="abc-toolbar">
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="pencil"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="trash"/></Button>
                                            </ButtonToolbar>
                                            <Image
                                                className="image-top"
                                                src="/external/images/766934548.jpg">
                                            </Image>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>爱逛街</h5>
                                                    <p>流行的好品味</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/1025118364.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>必买单</h5>
                                                    <p>都伴您整理好了</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/310288666.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>爱逛街</h5>
                                                    <p>流行的好品味</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/944876135.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>必买单</h5>
                                                    <p>都伴您整理好了</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/1025118364.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                </tr>

                            </Table>
                        </Col>
                        <Col xs={12} xp={6} sm={6} md={6}  lg={4}>
                            <Table className="abc-table" cellspacing="1px" cellPadding="0">
                                <tr align="center">
                                    <td colSpan="2" className="td-1-2">
                                        <div className="abc-content-lg-top">
                                            <div className="abc-content">
                                                <h5>公开部分大西北区</h5>
                                                <p>每列三个上下架构</p>
                                            </div>
                                            <ButtonToolbar className="abc-toolbar">
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="pencil"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="trash"/></Button>
                                            </ButtonToolbar>
                                            <Image
                                                className="image-top"
                                                src="/external/images/-1562635978.jpg">
                                            </Image>
                                        </div>
                                    </td>
                                    <td colSpan="2" className="td-1-2">
                                        <div className="abc-content-lg-top">
                                            <div className="abc-content">
                                                <h5>公开部分大西北区</h5>
                                                <p>每列三个上下架构</p>
                                            </div>
                                            <ButtonToolbar className="abc-toolbar">
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="pencil"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="trash"/></Button>
                                            </ButtonToolbar>
                                            <Image
                                                className="image-top"
                                                src="/external/images/766934548.jpg">
                                            </Image>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>爱逛街</h5>
                                                    <p>流行的好品味</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/-1532917364.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>必买单</h5>
                                                    <p>都伴您整理好了</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/-1372248994.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>爱逛街</h5>
                                                    <p>流行的好品味</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/310288666.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>必买单</h5>
                                                    <p>都伴您整理好了</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/-1532917364.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                </tr>

                            </Table>
                        </Col>
                        <Col xs={12} xp={6} sm={6} md={6}  lg={4}>
                            <Table className="abc-table" cellspacing="1px" cellPadding="0">
                                <tr align="center">
                                    <td colSpan="2" className="td-1-2">
                                        <div className="abc-content-lg-top">
                                            <div className="abc-content">
                                                <h5>公开部分大西北区</h5>
                                                <p>每列三个上下架构</p>
                                            </div>
                                            <ButtonToolbar className="abc-toolbar">
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="pencil"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="trash"/></Button>
                                            </ButtonToolbar>
                                            <Image
                                                className="image-top"
                                                src="/external/images/1069629669.jpg">
                                            </Image>
                                        </div>
                                    </td>
                                    <td colSpan="2" className="td-1-2">
                                        <div className="abc-content-lg-top">
                                            <div className="abc-content">
                                                <h5>公开部分大西北区</h5>
                                                <p>每列三个上下架构</p>
                                            </div>
                                            <ButtonToolbar className="abc-toolbar">
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="pencil"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="trash"/></Button>
                                            </ButtonToolbar>
                                            <Image
                                                className="image-top"
                                                src="/external/images/766934548.jpg">
                                            </Image>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>爱逛街</h5>
                                                    <p>流行的好品味</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/1025118364.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>必买单</h5>
                                                    <p>都伴您整理好了</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/pizza.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>爱逛街</h5>
                                                    <p>流行的好品味</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/-1532917364.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>必买单</h5>
                                                    <p>都伴您整理好了</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/944876135.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                </tr>

                            </Table>
                        </Col>
                        <Col xs={12} xp={6} sm={6} md={6}  lg={4}>
                            <Table className="abc-table" cellspacing="1px" cellPadding="0">
                                <tr align="center">
                                    <td colSpan="2" className="td-1-2">
                                        <div className="abc-content-lg-top">
                                            <div className="abc-content">
                                                <h5>公开部分大西北区</h5>
                                                <p>每列三个上下架构</p>
                                            </div>
                                            <ButtonToolbar className="abc-toolbar">
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="pencil"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="trash"/></Button>
                                            </ButtonToolbar>
                                            <Image
                                                className="image-top"
                                                src="/external/images/IMG_20161004_124314.jpg">
                                            </Image>
                                        </div>
                                    </td>
                                    <td colSpan="2" className="td-1-2">
                                        <div className="abc-content-lg-top">
                                            <div className="abc-content">
                                                <h5>公开部分大西北区</h5>
                                                <p>每列三个上下架构</p>
                                            </div>
                                            <ButtonToolbar className="abc-toolbar">
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="pencil"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="trash"/></Button>
                                            </ButtonToolbar>
                                            <Image
                                                className="image-top"
                                                src="/external/images/766934548.jpg">
                                            </Image>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>爱逛街</h5>
                                                    <p>流行的好品味</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/1025118364.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>必买单</h5>
                                                    <p>都伴您整理好了</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/-1532917364.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>爱逛街</h5>
                                                    <p>流行的好品味</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/1360458739.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>必买单</h5>
                                                    <p>都伴您整理好了</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/-1532917364.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                </tr>

                            </Table>
                        </Col>
                    </Grid>
                </AbcPanel>
                <AbcPanel  header={priceButtomHeader}>
                    <Grid className="container-list-abc">
                        <Col xs={12} xp={6} sm={6} md={6}  lg={4}>
                            <Table className="abc-table" cellspacing="1px" cellPadding="0">
                                <tr>
                                    <td className="td-1-2" rowSpan="2">
                                        <div className="abc-content-lg">
                                            <div className="abc-content">
                                                <h5>公开部分大西北区</h5>
                                                <p>每列三个上下架构</p>
                                            </div>

                                            <Image
                                                className="image"
                                                src="/external/images/2100187990.jpg">
                                            </Image>
                                            <ButtonToolbar className="abc-toolbar">
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="pencil"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="trash"/></Button>
                                            </ButtonToolbar>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>爱逛街</h5>
                                                    <p>流行的好品味</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/1360458739.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>爱逛街</h5>
                                                    <p>流行的好品味</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/-1532917364.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>爱逛街</h5>
                                                    <p>流行的好品味</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/310288666.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>爱逛街</h5>
                                                    <p>流行的好品味</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/-1532917364.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>爱逛街</h5>
                                                    <p>流行的好品味</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/944876135.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>爱逛街</h5>
                                                    <p>流行的好品味</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/-1532917364.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                </tr>
                            </Table>
                        </Col>
                        <Col xs={12} xp={6} sm={6} md={6}  lg={4}>
                            <Table className="abc-table" cellspacing="1px" cellPadding="0">
                                <tr>
                                    <td className="td-1-2" rowSpan="2">
                                        <div className="abc-content-lg">
                                            <div className="abc-content">
                                                <h5>公开部分大西北区</h5>
                                                <p>每列三个上下架构</p>
                                            </div>
                                            <Image
                                                className="image"
                                                src="/external/images/1069629669.jpg">
                                            </Image>
                                            <ButtonToolbar className="abc-toolbar">
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="pencil"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="trash"/></Button>
                                            </ButtonToolbar>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>爱逛街</h5>
                                                    <p>流行的好品味</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/1360458739.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>爱逛街</h5>
                                                    <p>流行的好品味</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/-1532917364.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>爱逛街</h5>
                                                    <p>流行的好品味</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/310288666.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>爱逛街</h5>
                                                    <p>流行的好品味</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/310288666.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>爱逛街</h5>
                                                    <p>流行的好品味</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/1360458739.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>爱逛街</h5>
                                                    <p>流行的好品味</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/465430911.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                </tr>
                            </Table>
                        </Col>
                        <Col xs={12} xp={6} sm={6} md={6}  lg={4}>
                            <Table className="abc-table" cellspacing="1px" cellPadding="0">
                                <tr>
                                    <td className="td-1-2" rowSpan="2">
                                        <div className="abc-content-lg">
                                            <div className="abc-content">
                                                <h5>公开部分大西北区</h5>
                                                <p>每列三个上下架构</p>
                                            </div>
                                            <Image
                                                className="image"
                                                src="/external/images/1069629669.jpg">
                                            </Image>
                                            <ButtonToolbar className="abc-toolbar">
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="pencil"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="trash"/></Button>
                                            </ButtonToolbar>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>爱逛街</h5>
                                                    <p>流行的好品味</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/-1532917364.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>爱逛街</h5>
                                                    <p>流行的好品味</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/465430911.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>爱逛街</h5>
                                                    <p>流行的好品味</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/1360458739.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>爱逛街</h5>
                                                    <p>流行的好品味</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/-1532917364.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>爱逛街</h5>
                                                    <p>流行的好品味</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/465430911.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>爱逛街</h5>
                                                    <p>流行的好品味</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/465430911.jpg"
                                                className="image-buttom"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                </tr>
                            </Table>
                        </Col>
                    </Grid>
                </AbcPanel>
                <AbcPanel  header={productTaobaoHeader}>
                    <Grid className="container-list-abc">
                        <Col xs={12} xp={6} sm={6} md={6}  lg={4}>
                            <Table className="abc-table" cellspacing="1px" cellPadding="0">
                                <tr>
                                    <td rowSpan="2" className="td-1-2">
                                        <div className="abc-content-lg">
                                            <div className="abc-content">
                                                <h5>公开部分大西北区</h5>
                                                <p>每列三个上下架构</p>
                                            </div>

                                            <Image
                                                className="image"
                                                src="/external/images/766934548.jpg">
                                            </Image>
                                            <ButtonToolbar className="abc-toolbar">
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="pencil"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="trash"/></Button>
                                            </ButtonToolbar>
                                        </div>
                                    </td>
                                    <td colSpan="2" className="td-1-2-t">
                                        <div className="abc-content-md">
                                            <Image
                                                src="/external/images/-1532917364.jpg"
                                                className="image-right"
                                                alt="Pizza">
                                            </Image>
                                            <div className="abc-content">
                                                <h5>好有货</h5>
                                                <p>好品味从挑剔开始</p>
                                                <p>品质生活指南</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>爱逛街</h5>
                                                    <p>流行的好品味</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/-1532917364.jpg"
                                                className="image-static"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>必买单</h5>
                                                    <p>都伴您整理好了</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/1360458739.jpg"
                                                className="image-static"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                </tr>
                            </Table>
                        </Col>
                        <Col xs={12} xp={6} sm={6} md={6}  lg={4}>
                            <Table className="abc-table" cellspacing="1px" cellPadding="0">
                                <tr>
                                    <td rowSpan="2" className="td-1-2">
                                        <div className="abc-content-lg">
                                            <div className="abc-content">
                                                <h5>公开部分大西北区</h5>
                                                <p>每列三个上下架构</p>
                                            </div>

                                            <Image
                                                className="image"
                                                src="/external/images/766934548.jpg">
                                            </Image>
                                            <ButtonToolbar className="abc-toolbar">
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="pencil"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="trash"/></Button>
                                            </ButtonToolbar>
                                        </div>
                                    </td>
                                    <td colSpan="2" className="td-1-2-t">
                                        <div className="abc-content-md">
                                            <Image
                                                src="/external/images/-1532917364.jpg"
                                                className="image-right"
                                                alt="Pizza">
                                            </Image>
                                            <div className="abc-content">
                                                <h5>好有货</h5>
                                                <p>好品味从挑剔开始</p>
                                                <p>品质生活指南</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>爱逛街</h5>
                                                    <p>流行的好品味</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/944876135.jpg"
                                                className="image-static"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>必买单</h5>
                                                    <p>都伴您整理好了</p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/465430911.jpg"
                                                className="image-static"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                </tr>
                            </Table>
                        </Col>
                    </Grid>
                </AbcPanel>
                <AbcPanel  header={productEtrHeader}>
                    <Grid className="container-list-abc">
                        <Col xs={12} xp={6} sm={6} md={6}  lg={4}>
                            <Table className="abc-table" cellspacing="1px" cellPadding="0">
                                <tr>
                                    <td rowSpan="2" className="td-1-2">
                                        <div className="abc-content-lg">
                                            <div className="abc-content">
                                                <h5>公开部分大西北区</h5>
                                                <p>每列三个上下架构</p>
                                            </div>
                                            <Image
                                                className="image"
                                                src="/external/images/1069629669.jpg">
                                            </Image>

                                        </div>
                                    </td>
                                    <td colSpan="2" className="td-1-2-t">
                                        <div className="abc-content-md">
                                            <div className="abc-content">
                                                <h5>公开测试部分陕甘区代理</h5>
                                            </div>
                                            <Image
                                                src="/external/images/-1532917364.jpg"
                                                className="image-h"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>甘肃区代理</h5>

                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/1360458739.jpg"
                                                className="image-static"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>甘肃区代理</h5>

                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/-1532917364.jpg"
                                                className="image-static"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                </tr>
                            </Table>
                        </Col>
                        <Col xs={12} xp={6} sm={6} md={6}  lg={4}>
                            <Table className="abc-table" cellspacing="1px" cellPadding="0">
                                <tr>
                                    <td rowSpan="2" className="td-1-2">
                                        <div className="abc-content-lg">
                                            <div className="abc-content">
                                                <h5>公开测试部分东北区代理</h5>
                                                <p>每列三个上下架构</p>
                                            </div>
                                            <Image
                                                className="image"
                                                src="/external/images/1069629669.jpg">
                                            </Image>
                                        </div>
                                    </td>
                                    <td colSpan="2" className="td-1-2-t">
                                        <div className="abc-content-md">
                                            <div className="abc-content">
                                                <h5>公开测试部分陕甘区代理</h5>

                                            </div>
                                            <Image
                                                src="/external/images/94910119.jpg"
                                                className="image-h"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>甘肃区代理</h5>

                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/-1372248994.jpg"
                                                className="image-static"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>甘肃区代理</h5>

                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/2100187990.jpg"
                                                className="image-static"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                </tr>
                            </Table>
                        </Col>
                        <Col xs={12} xp={6} sm={6} md={6}  lg={4}>
                            <Table className="abc-table">
                                <tr>
                                    <td rowSpan="2" className="td-1-2">
                                        <div className="abc-content-lg">
                                            <div className="abc-content">
                                                <h5>公开测试部分东北区代理</h5>
                                                <p>每列三个上下架构</p>
                                            </div>
                                            <Image
                                                className="image"
                                                src="/external/images/766934548.jpg">
                                            </Image>
                                            <ButtonToolbar className="abc-toolbar">
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="pencil"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="trash"/></Button>
                                            </ButtonToolbar>
                                        </div>
                                    </td>
                                    <td colSpan="2" className="td-1-2-t">
                                        <div className="abc-content-md">
                                            <div className="abc-content">
                                                <h5>公开测试部分陕甘区代理</h5>

                                            </div>
                                            <Image
                                                src="/external/images/94910119.jpg"
                                                className="image-h"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>甘肃区代理</h5>

                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/465430911.jpg"
                                                className="image-static"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>甘肃区代理</h5>

                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/-1532917364.jpg"
                                                className="image-static"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                </tr>
                            </Table>
                        </Col>
                        <Col xs={12} xp={6} sm={6} md={6}  lg={4}>
                            <Table className="abc-table">
                                <tr>
                                    <td rowSpan="2" className="td-1-2">
                                        <div className="abc-content-lg">
                                            <div className="abc-content">
                                                <h5>公开测试部分东北区代理</h5>
                                                <p>每列三个上下架构</p>
                                            </div>
                                            <Image
                                                className="image"
                                                src="/external/images/766934548.jpg">
                                            </Image>
                                            <ButtonToolbar className="abc-toolbar">
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="pencil"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="trash"/></Button>
                                            </ButtonToolbar>
                                        </div>
                                    </td>
                                    <td colSpan="2" className="td-1-2-t">
                                        <div className="abc-content-md">
                                            <div className="abc-content">
                                                <h5>公开测试部分陕甘区代理</h5>

                                            </div>
                                            <Image
                                                src="/external/images/94910119.jpg"
                                                className="image-h"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>甘肃区代理</h5>

                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/burger.jpg"
                                                className="image-static"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>甘肃区代理</h5>

                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/1360458739.jpg"
                                                className="image-static"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                </tr>
                            </Table>
                        </Col>
                        <Col xs={12} xp={6} sm={6} md={6}  lg={4}>
                            <Table className="abc-table">
                                <tr>
                                    <td rowSpan="2" className="td-1-2">
                                        <div className="abc-content-lg">
                                            <div className="abc-content">
                                                <h5>公开测试部分东北区代理</h5>
                                                <p>每列三个上下架构</p>
                                            </div>
                                            <Image
                                                className="image"
                                                src="/external/images/1069629669.jpg">
                                            </Image>
                                            <ButtonToolbar className="abc-toolbar">
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="pencil"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="trash"/></Button>
                                            </ButtonToolbar>
                                        </div>
                                    </td>
                                    <td colSpan="2" className="td-1-2-t">
                                        <div className="abc-content-md">
                                            <div className="abc-content">
                                                <h5>公开测试部分陕甘区代理</h5>

                                            </div>
                                            <Image
                                                src="/external/images/94910119.jpg"
                                                className="image-h"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>甘肃区代理</h5>

                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/kebap.jpg"
                                                className="image-static"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>宁夏区代理</h5>

                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/tradi.jpg"
                                                className="image-static"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                </tr>
                            </Table>
                        </Col>
                        <Col xs={12} xp={6} sm={6} md={6}  lg={4}>
                            <Table className="abc-table">
                                <tr>
                                    <td rowSpan="2" className="td-1-2">
                                        <div className="abc-content-lg">
                                            <div className="abc-content">
                                                <h5>公开测试部分东北区代理</h5>
                                                <p>每列三个上下架构</p>
                                            </div>
                                            <Image
                                                className="image"
                                                src="/external/images/766934548.jpg">
                                            </Image>
                                            <ButtonToolbar className="abc-toolbar">
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="save"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="pencil"/></Button>
                                                <Button className="thumbnail-btn">
                                                    <Glyphicon glyph="trash"/></Button>
                                            </ButtonToolbar>
                                        </div>
                                    </td>
                                    <td colSpan="2" className="td-1-2-t">
                                        <div className="abc-content-md">
                                            <div className="abc-content">
                                                <h5>公开测试部分陕甘区代理</h5>

                                            </div>
                                            <Image
                                                src="/external/images/94910119.jpg"
                                                className="image-h"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>甘肃区代理</h5>

                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/restau03_mini.jpg"
                                                className="image-static"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-b">
                                        <div className="abc-content-sm">
                                            <div className="abc-content">
                                                <div>
                                                    <h5>甘肃区代理</h5>

                                                </div>
                                            </div>
                                            <Image
                                                src="/external/images/1360458739.jpg"
                                                className="image-static"
                                                alt="Pizza">
                                            </Image>
                                        </div>
                                    </td>
                                </tr>
                            </Table>
                        </Col>

                    </Grid>
                </AbcPanel>
                <AbcPanel  header={tableTodayHotHeader}>
                    <Grid className="container-list-abc">
                        <Col xs={12} xp={6} sm={6} md={6}  lg={4}>
                            <Table className="abc-table">
                                <tr>
                                    <td rowSpan="2" className="td-1-2">
                                        <div className="abc-content-lg">
                                            <div className="abc-content">
                                                <h5>公开测试部分西北</h5>
                                            </div>
                                            <Image className="image-s"
                                                   src="/external/images/-1357710743.jpg">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-r">
                                        <div className="abc-content-sm-right">
                                            <Image
                                                src="/external/images/94910119.jpg"
                                                className="image-right"
                                                alt="Pizza">
                                            </Image>
                                            <div className="abc-content">
                                                <h5>甘肃区代理</h5>
                                                <p >试用12个月</p>
                                            </div>

                                        </div>
                                    </td>
                                </tr>
                                <tr >
                                    <td className="td-1-2-r">
                                        <div  className="abc-content-sm-right">
                                            <Image
                                                src="/external/images/944876135.jpg"
                                                className="image-right"
                                                alt="Pizza">
                                            </Image>
                                            <div className="abc-content">
                                                <h5>青海区代理</h5>
                                                <p >试用12个月</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </Table>
                        </Col>
                        <Col xs={12} xp={6} sm={6} md={6}  lg={4}>
                            <Table className="abc-table">
                                <tr>
                                    <td rowSpan="2" className="td-1-2">
                                        <div className="abc-content-lg">
                                            <div className="abc-content">
                                                <h5>公开测试部分西北</h5>
                                            </div>
                                            <Image className="image-s"
                                                   src="/external/images/-1357710743.jpg">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-r">
                                        <div className="abc-content-sm-right">
                                            <Image
                                                src="/external/images/94910119.jpg"
                                                className="image-right"
                                                alt="Pizza">
                                            </Image>
                                            <div className="abc-content">
                                                <h5>甘肃区代理</h5>
                                                <p >试用12个月</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr >
                                    <td className="td-1-2-r">
                                        <div  className="abc-content-sm-right">
                                            <Image
                                                src="/external/images/607599704.jpg"
                                                className="image-right"
                                                alt="Pizza">
                                            </Image>
                                            <div className="abc-content">
                                                <h5>青海区代理</h5>
                                                <p >试用12个月</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </Table>
                        </Col>
                        <Col xs={12} xp={6} sm={6} md={6}  lg={4}>
                            <Table className="abc-table">
                                <tr>
                                    <td rowSpan="2" className="td-1-2">
                                        <div className="abc-content-lg">
                                            <div className="abc-content">
                                                <h5>公开测试部分西北</h5>
                                            </div>
                                            <Image className="image-s"
                                                   src="/external/images/-1357710743.jpg">
                                            </Image>
                                        </div>
                                    </td>
                                    <td className="td-1-2-r">
                                        <div className="abc-content-sm">
                                            <Image
                                                src="/external/images/94910119.jpg"
                                                className="image-left"
                                                alt="Pizza">
                                            </Image>
                                            <div className="abc-content">
                                                <h5>甘肃区代理</h5>
                                                <p >试用12个月</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr >
                                    <td className="td-1-2-r">
                                        <div  className="abc-content-sm">
                                            <Image
                                                src="/external/images/944876135.jpg"
                                                className="image-left"
                                                alt="Pizza">
                                            </Image>
                                            <div className="abc-content">
                                                <h5>青海区代理</h5>
                                                <p >试用12个月</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </Table>
                        </Col>
                    </Grid>
                </AbcPanel>

                <AbcPanel  header={tableSampleHeader}>
                    <Grid className="container-list-abc">
                        <Col xs={12} xp={6} sm={6} md={6}  lg={4}>
                            <Table striped={true} bordered={true} condensed={true} hover={true}
                                   style={{border:"1px solid #ddd",cellSpacing:"1",cellPadding:"1",verticalAlign:"middle"}}
                                   cellSpacing="1" cellPadding="1"
                            >
                                <caption>1+2</caption>
                                <tr>
                                    <td rowSpan="2" style={{border:"1px solid #ddd",width:"50%"}}>
                                        A-B</td>
                                    <td className="td-1-2-t">A</td>
                                </tr>
                                <tr>
                                    <td style={{border:"1px solid #ddd"}}>B</td>
                                </tr>
                            </Table>
                        </Col>
                        <Col xs={12} xp={6} sm={6} md={6}  lg={4}>
                            <Table striped={true} bordered={true} condensed={true} hover={true}
                                   style={{border:"1px solid #F00"}}
                            >
                                <caption>1-1-2</caption>
                                <tr align="center">
                                    <td rowSpan="2" style={{border:"1px solid #ddd",width:"50%"}}>A-B</td>
                                    <td colSpan="2" style={{border:"1px solid #ddd"}}>A1-A2</td>
                                </tr>
                                <tr align="center">
                                    <td style={{border:"1px solid #ddd"}}>B1</td>
                                    <td style={{border:"1px solid #ddd"}}>B2</td>
                                </tr>
                            </Table>
                        </Col>
                        <Col xs={12} xp={6} sm={6} md={6}  lg={4}>
                            <Table striped={true} bordered={true} condensed={true} hover={true}
                                   style={{border:"1px solid #F00"}}
                            >
                                <caption>1+6</caption>
                                <tr align="center">
                                    <td rowSpan="2" style={{border:"1px solid #ddd",width:"50%"}}>A-B</td>
                                    <td style={{border:"1px solid #ddd"}}>A1</td>
                                    <td style={{border:"1px solid #ddd"}}>A2</td>
                                    <td style={{border:"1px solid #ddd"}}>A3</td>
                                </tr>
                                <tr align="center">
                                    <td style={{border:"1px solid #ddd"}}>B1</td>
                                    <td style={{border:"1px solid #ddd"}}>B2</td>
                                    <td style={{border:"1px solid #ddd"}}>B3</td>
                                </tr>
                            </Table>
                        </Col>
                        <Col xs={12} xp={6} sm={6} md={6}  lg={4}>
                            <Table striped={true} bordered={true} condensed={true} hover={true}
                                   style={{border:"1px solid #F00"}}
                            >
                                <caption>1+4</caption>
                                <tr align="center">
                                    <td style={{border:"1px solid #ddd" ,width:"40%"}}>A-B</td>
                                    <td style={{border:"1px solid #ddd" ,width:"20%"}}>A1</td>
                                    <td style={{border:"1px solid #ddd" ,width:"20%"}}>A2</td>
                                    <td style={{border:"1px solid #ddd" ,width:"20%"}}>A3</td>
                                </tr>
                                <tr align="center">
                                    <td style={{border:"1px solid #ddd" ,width:"40%"}}>B1</td>
                                    <td style={{border:"1px solid #ddd" ,width:"20%"}}>B2</td>
                                    <td style={{border:"1px solid #ddd" ,width:"20%"}}>B3</td>
                                    <td style={{border:"1px solid #ddd" ,width:"20%"}}>A3</td>
                                </tr>
                            </Table>
                        </Col>
                    </Grid>
                </AbcPanel>
            </AbcPanel>

        )
    }

}