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
    Image,Button,Media,Checkbox,ButtonToolbar,FormControl} from '../../../abc-bootstrap'

import {AbcFormInline,AbcRow,AbcPanel,AbcButtonToolbarRight,AbcButton,
    AbcColRedFormA,AbcColRedFormB,AbcColRedFormC,
    AbcPanelHeaderTitleAndNumber as HeaderTitleAndNumber}
    from '../../../abc-ui/abc-ui-index'
import Spinner        from '../../../abc-ui/spinner'

//业务功能
// import AuthenticationManager from './AuthenticationManager'
// import {list} from'./formConfig'

export default class ProductList extends React.Component {

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
        const authenticationSearchHeader=(<HeaderTitleAndNumber numbers="17" title="产品查询"/>);
        const authenticationListHeader=(<HeaderTitleAndNumber numbers="10" title="产品分类"/>);
        const authenticationAdimHeader=(<HeaderTitleAndNumber numbers="10" title="管理产品"/>);
        const productListHeader=(<HeaderTitleAndNumber numbers="2" title="热卖"/>);
        const productHotHeader=(<HeaderTitleAndNumber numbers="6,3,3,2," title="产品上架"/>);
        const productVenderHeader=(<HeaderTitleAndNumber numbers="3,2,2,2,1" title="供应商"/>);
        const productHeader=(<HeaderTitleAndNumber numbers="10" title="产品"/>);
        const produceVendderCashListHeader=(<HeaderTitleAndNumber numbers="10" title="厂商营销"/>);
        const produceInOrderHeader=(<HeaderTitleAndNumber numbers="10" title="在购商品"/>);
        return (
            <AbcPanel>
                <AbcPanel header={productHeader}>
                    <Grid>
                        <Row className="thumbnail-container-single-abc">
                            <Col xs={1} xp={1} sm={1} md={1} lg={1} >
                                <Checkbox className="thumbnail-checkbox-single-abc"/>
                            </Col>
                            <Col xs={4}  xp={2} sm={2}  md={2} lg={2} >
                                <Image
                                    src="/external/images/kebap.jpg"
                                    className="thumbnail-image-single-abc"
                                    alt="Pizza">
                                </Image>
                            </Col>
                            <Col xs={7} xp={8} sm={7} md={7} lg={7} >
                                <div className="thumbnail-content-abc">
                                    <div>
                                        <h5 >
                                            Pad2-竖屏-三星竖屏-苹果竖屏-三星横<Glyphicon glyph="mark"/>个性彩色剪刀钢笔式
                                            炫彩便携安全手工剪刀带保护套</h5>
                                        <p>颜色分类:蓝色</p>
                                        <div className="thumbnail-operator-inline">
                                            <p className="number-postion">><Glyphicon glyph="yen"/>4.5</p>
                                            <p className="number-postion">*1</p>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                            <Col xsHidden={true} xpHidden={true} sm={2} md={2} lg={2} >
                                <div  className="thumbnail-operator-abc">
                                    <Button bsStyle="default"
                                            style={{padding:"2px 6px",border:"none"}}
                                    ><Glyphicon glyph="pencil"/></Button>
                                    <Button bsStyle="default"
                                            style={{padding:"2px 6px",border:"none"}}
                                    ><Glyphicon glyph="trash"/></Button>
                                </div>
                            </Col>
                        </Row>
                        <Row  className="thumbnail-container-single-abc">
                            <Col xs={1} xp={1} sm={1} md={1} lg={1} >
                                <Checkbox className="thumbnail-checkbox-single-abc"/>
                            </Col>
                            <Col xs={4}  xp={2} sm={2}  md={2} lg={2} >

                                <Image
                                    src="/external/images/kebap.jpg"
                                    className="thumbnail-image-single-abc"
                                    alt="Pizza">
                                </Image>
                            </Col>
                            <Col xs={7} xp={8} sm={7} md={7} lg={7} >
                                <div className="thumbnail-content-abc">
                                    <div>
                                        <h5>Pad2-横<Glyphicon glyph="mark"/>个性彩色剪刀钢笔式
                                            炫彩便携安全手工剪刀带保护套</h5>
                                        <p>颜色分类:蓝色</p>
                                        <div className="cashContent">
                                            <p className="inline">
                                                <Glyphicon glyph="yen"/>4.5</p>
                                            <p className="number-postion">*1</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xsHidden={true} xpHidden={true} sm={2} md={2} lg={2} >
                                <div  className="thumbnail-operator-abc">
                                    <Button bsStyle="default"><Glyphicon glyph="pencil"/></Button>
                                    <Button bsStyle="default"><Glyphicon glyph="trash"/></Button>
                                </div>
                            </Col>
                        </Row>
                        <Row className="thumbnail-container-single-abc">
                            <Col xs={1} xp={1} sm={1} md={1} lg={1} >
                                <Checkbox className="thumbnail-checkbox-single-abc"/>
                            </Col>
                            <Col xs={4}  xp={2} sm={1}  md={1} lg={2} >

                                <Image
                                    src="/external/images/kebap.jpg"
                                    style={{width:"12rem",height:"12rem"}}
                                    alt="Pizza">
                                </Image>
                            </Col>
                            <Col xs={7} xp={8} sm={7} md={7} lg={7} >
                                <div className="thumbnail-content-abc"
                                     style={{marginTop:"2%"}}
                                >
                                    <div>
                                        <h5  style={{lineHeight:"1.6"}}
                                        >Chromse<Glyphicon glyph="mark"/>个性彩色剪刀钢笔式
                                            炫彩便携安全手工剪刀带保护套</h5>
                                        <p>颜色分类:蓝色</p>
                                        <div style={{position:"relative"}}>
                                            <p style={{display:"inline"}}>
                                                <Glyphicon glyph="yen"/>4.5</p>
                                            <p style={{position:"relative" , float:"right"}}>*1</p>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                            <Col xsHidden={true} xpHidden={true} sm={2} md={2} lg={2} >
                                <div  className="thumbnail-operator-abc">
                                    <Button bsStyle="default"
                                            style={{padding:"2px 6px",border:"none"}}
                                    ><Glyphicon glyph="pencil"/></Button>
                                    <Button bsStyle="default"
                                            style={{padding:"2px 6px",border:"none"}}
                                    ><Glyphicon glyph="trash"/></Button>
                                </div>
                            </Col>
                        </Row>
                        <Row className="thumbnail-image-content-abc"
                             style={{height:"16rem",lineHeight:"1.6"}}
                        >
                            <Col xs={1} xp={1} sm={1} md={1} lg={1} >
                                <Checkbox
                                    style={{position:"relative",float:"right", paddingTop:"6rem"}}
                                />
                            </Col>
                            <Col xs={4}  xp={2} sm={1}  md={1} lg={2} >

                                <Image
                                    src="/external/images/kebap.jpg"
                                    style={{width:"14.6rem",height:"14.6rem"}}
                                    alt="Pizza">
                                </Image>
                            </Col>
                            <Col xs={7} xp={8} sm={7} md={7} lg={7} >
                                <div className="thumbnail-content-abc"
                                     style={{marginTop:"2%"}}
                                >
                                    <div>
                                        <h5  style={{lineHeight:"1.6"}}
                                        >火狐、微软<Glyphicon glyph="mark"/>个性彩色剪刀钢笔式
                                            炫彩便携安全手工剪刀带保护套</h5>
                                        <p>颜色分类:蓝色</p>
                                        <div style={{position:"relative"}}>
                                            <p style={{display:"inline"}}>
                                                <Glyphicon glyph="yen"/>4.5</p>
                                            <p style={{position:"relative" , float:"right"}}>*1</p>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                            <Col xsHidden={true} xpHidden={true} sm={2} md={2} lg={2} >
                                <div  className="thumbnail-operator-abc">
                                    <Button bsStyle="default"
                                            style={{padding:"2px 6px",border:"none"}}
                                    ><Glyphicon glyph="pencil"/></Button>
                                    <Button bsStyle="default"
                                            style={{padding:"2px 6px",border:"none"}}
                                    ><Glyphicon glyph="trash"/></Button>
                                </div>
                            </Col>
                        </Row>
                        <Row className="thumbnail-image-content-abc"
                             style={{height:"10.2rem"}}
                        >
                            <Col xs={1} xp={1} sm={1} md={1} lg={1} >
                                 <Checkbox
                                     style={{position:"relative",float:"right", paddingTop:"2rem"}}
                                 />
                            </Col>
                            <Col xs={4}  xp={2} sm={2}  md={2} lg={1} >
                                <Image
                                    src="/external/images/kebap.jpg"
                                    style={{width:"8rem",height:"8rem"}}
                                    alt="Pizza">
                                </Image>
                            </Col>
                            <Col xs={7} xp={9} sm={7} md={7} lg={8} >
                                <div className="thumbnail-content-abc"
                                    style={{marginTop:"2%"}}
                                >
                                    <div>
                                        <h5  style={{lineHeight:"1.6"}}>
                                             三星<Glyphicon glyph="mark"/>个性彩色剪刀钢笔式
                                            炫彩便携安全手工剪刀带保护套</h5>
                                        <p>支付类试用12个月</p>
                                    </div>
                                    <ButtonToolbar style={{display:"-webkit-inline-box"}}>
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="plus"/></Button>
                                        <FormControl type="number"
                                                     inline={true}
                                                     style={{width:"56px",height:"24px" , fontSize:"9px"}}
                                                     placeholder="1" />
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="minus"/></Button>

                                    </ButtonToolbar>
                                </div>
                            </Col>
                            <Col xsHidden={true} xpHidden={true} sm={2} md={2} lg={2} >
                                <div  className="thumbnail-operator-abc">
                                    <Button bsStyle="default"
                                            style={{padding:"2px 6px",border:"none"}}
                                    ><Glyphicon glyph="pencil"/></Button>
                                    <Button bsStyle="default"
                                            style={{padding:"2px 6px",border:"none"}}
                                    ><Glyphicon glyph="trash"/></Button>
                                </div>
                            </Col>
                        </Row>
                        <Row className="thumbnail-container-single-abc">
                            <Col xs={1} xp={1} sm={1} md={1} lg={1} >
                                <Checkbox className="thumbnail-checkbox-single-abc"/>
                            </Col>
                            <Col xs={4}  xp={2} sm={1}  md={1} lg={2} >
                                <Image
                                    src="/external/images/kebap.jpg"
                                    className="thumbnail-image-single-abc"
                                    alt="苹果">
                                </Image>
                            </Col>
                            <Col xs={7} xp={8} sm={7} md={7} lg={7} >
                                <div className="thumbnail-content-abc">
                                    <div>
                                        <h5>
                                        苹果<Glyphicon glyph="mark"/>个性彩色剪刀钢笔式
                                            炫彩便携安全手工剪刀</h5>
                                        <p>带保护套,支付类试用12个月</p>
                                    </div>
                                    <ButtonToolbar className="thumbnail-toolbar-abc">
                                        <Button bsStyle="default"
                                        ><Glyphicon glyph="plus"/></Button>
                                        <FormControl type="number"
                                                     inline={true}
                                                     style={{width:"56px",height:"24px" ,
                                                        display:"inline",fontSize:"9px"}}
                                                     placeholder="1" />
                                        <Button bsStyle="default"><Glyphicon glyph="minus"/></Button>
                                    </ButtonToolbar>
                                </div>
                            </Col>
                            <Col xsHidden={true} xpHidden={true} sm={2} md={2} lg={2} >
                                <div  className="thumbnail-operator-abc">
                                    <Button bsStyle="default"><Glyphicon glyph="pencil"/></Button>
                                    <Button bsStyle="default"><Glyphicon glyph="trash"/></Button>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </AbcPanel>
                <AbcPanel  header={produceVendderCashListHeader}>
                    <Grid className="container-abc">
                        <Row>
                            <Col xs={6} xp={4} sm={4} md={4}  lg={3}>
                                <div className="thumbnail-b-image-abc">
                                    <div className="b-content-continer">
                                        <h6>公开测试部分上海区代理</h6>
                                        <p>支付类试用12个月</p>
                                    </div>
                                    <Row>
                                        <div className="b-image-continer">

                                            <Image
                                                className="b-image-inline"
                                                src="/external/images/IMG_20161004_123456.jpg">
                                            </Image>

                                            <Image
                                                className="b-image-inline"
                                                src="/external/images/1025118364.jpg">
                                            </Image>

                                        </div>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={4}  lg={3}>
                                <div className="thumbnail-b-image-abc">
                                    <div className="b-content-continer">
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>

                                    <Row>
                                        <div className="b-image-continer">

                                                <Image
                                                    className="b-image-inline"
                                                    src="/external/images/-1372248994.jpg">
                                                </Image>

                                                <Image
                                                    className="b-image-inline"
                                                    src="/external/images/310288666.jpg">
                                                </Image>

                                        </div>
                                    </Row>

                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={4}  lg={3}>
                                <div className="thumbnail-b-image-abc">
                                    <div className="b-content-continer">
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>

                                    <Row>
                                        <div className="b-image-continer">

                                            <Image
                                                className="b-image-inline"
                                                src="/external/images/IMG_20161004_123456.jpg">
                                            </Image>

                                            <Image
                                                className="b-image-inline"
                                                src="/external/images/IMG_20161004_123546.jpg">
                                            </Image>

                                        </div>
                                    </Row>

                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={4}  lg={3}>
                                <div className="thumbnail-b-image-abc">
                                    <div className="b-content-continer">
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>

                                    <Row>
                                        <div className="b-image-continer">

                                            <Image
                                                className="b-image-inline"
                                                src="/external/images/IMG_20161004_123823.jpg">
                                            </Image>

                                            <Image
                                                className="b-image-inline"
                                                src="/external/images/IMG_20161004_124241.jpg">
                                            </Image>

                                        </div>
                                    </Row>

                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={4}  lg={3}>
                                <div className="thumbnail-b-image-abc">
                                    <div className="b-content-continer">
                                        <h6>公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>

                                    <Row>
                                        <div className="b-image-continer">

                                            <Image
                                                className="b-image-inline"
                                                src="/external/images/IMG_20161004_123456.jpg">
                                            </Image>

                                            <Image
                                                className="b-image-inline"
                                                src="/external/images/IMG_20161004_123456.jpg">
                                            </Image>

                                        </div>
                                    </Row>

                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={4}  lg={3}>
                                <div className="thumbnail-b-image-abc">
                                    <div className="b-content-continer">
                                        <h6 >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>

                                    <Row>
                                        <div className="b-image-continer">

                                            <Image
                                                className="b-image-inline"
                                                src="/external/images/IMG_20161004_124314.jpg">
                                            </Image>

                                            <Image
                                                className="b-image-inline"
                                                src="/external/images/IMG_20161019_183549.jpg">
                                            </Image>

                                        </div>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </AbcPanel>
                <AbcPanel  header={productHeader}>
                    <Grid>
                        <Row>
                            <Col xs={6} xp={4} sm={4} md={3} lg={3} >
                                <div className="thumbnail-image-content-abc">
                                    <Image
                                        src="/external/images/kebap.jpg"
                                        className="image-right"
                                        alt="Pizza">
                                    </Image>

                                    <div className="thumbnail-content-abc"
                                         style={{color:"red"}}>
                                        <div>
                                            <h5>公开测试部分上海区代理</h5>
                                            <p>支付类试用12个月</p>
                                        </div>
                                    </div>
                                    <div  className="thumbnail-operator-abc">
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="pencil"/></Button>
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="trash"/></Button>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3} lg={3} >
                                <div className="thumbnail-image-content-abc">
                                    <Image
                                        src="/external/images/94910119.jpg"
                                        className="image-right"
                                        circle
                                        alt="Pizza">
                                    </Image>
                                    <div className="thumbnail-content-abc">
                                        <div>
                                            <h5>公开测试部分上海区代理</h5>
                                            <p>支付类试用12个月</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3} lg={3} >
                                <div className="thumbnail-image-content-abc">
                                    <Image
                                        src="/external/images/95826644.jpg"
                                        className="image-right"
                                        alt="Pizza">
                                    </Image>
                                    <div className="thumbnail-content-abc">
                                        <div>
                                            <h5>公开测试部分上海区代理</h5>
                                            <p>支付类试用12个月</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3} lg={3} >
                                <div className="thumbnail-image-content-abc">
                                    <Image
                                        src="/external/images/310288666.jpg"
                                        className="image-right"
                                        alt="Pizza">
                                    </Image>
                                    <div className="thumbnail-content-abc">
                                        <div>
                                            <h5>Thumbnail</h5>
                                            <p>Description</p>
                                        </div>
                                        <div className="thumbnail-buttons-abc">
                                            <Button bsStyle="primary"
                                                    style={{padding:"2px 6px",border:"none"}}
                                            ><Glyphicon glyph="save"/></Button>
                                            &nbsp;
                                            <Button bsStyle="default"
                                                    style={{padding:"2px 6px",border:"none"}}
                                            ><Glyphicon glyph="save"/></Button>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3} lg={3} >
                                <div className="thumbnail-image-content-abc">
                                    <Image
                                        src="/external/images/334049567.jpg"
                                        className="image-right"
                                        alt="Pizza">
                                    </Image>
                                    <div className="thumbnail-content-abc">
                                        <div>
                                            <h5>Thumbnail</h5>
                                            <p>Description</p>
                                        </div>
                                        <div className="thumbnail-buttons-abc">
                                            <Button bsStyle="primary"
                                                    style={{padding:"2px 6px",border:"none"}}
                                            ><Glyphicon glyph="save"/></Button>
                                            &nbsp;
                                            <Button bsStyle="default"
                                                    style={{padding:"2px 6px",border:"none"}}
                                            ><Glyphicon glyph="save"/></Button>
                                        </div>
                                    </div>

                                    <div  className="thumbnail-operator-abc">
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="pencil"/></Button>
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="trash"/></Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Grid>

                </AbcPanel>
                <AbcPanel  header={productHeader}>
                    <Grid>
                        <Row>
                            <Col xs={6} xp={4} sm={4} md={3} lg={3} >
                                <div className="thumbnail-image-content-abc">
                                    <Image
                                        src="/external/images/kebap.jpg"
                                        alt="Pizza">
                                    </Image>

                                    <div className="thumbnail-content-abc"
                                         style={{color:"red"}}>
                                        <div>
                                            <h5>公开测试部分上海区代理</h5>
                                            <p>支付类试用12个月</p>
                                        </div>
                                    </div>
                                    <div  className="thumbnail-operator-abc">
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="pencil"/></Button>
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="trash"/></Button>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3} lg={3} >
                                <div className="thumbnail-image-content-abc">
                                    <Image
                                        src="/external/images/pizza.jpg"
                                        circle
                                        alt="Pizza">
                                    </Image>
                                    <div className="thumbnail-content-abc">
                                        <div>
                                            <h5>公开测试部分上海区代理</h5>
                                            <p>支付类试用12个月</p>
                                        </div>
                                      </div>
                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3} lg={3} >
                                <div className="thumbnail-image-content-abc">
                                    <Image
                                        src="/external/images/pizza.jpg"
                                        alt="Pizza">
                                    </Image>
                                    <div className="thumbnail-content-abc">
                                        <div>
                                            <h5>公开测试部分上海区代理</h5>
                                            <p>支付类试用12个月</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3} lg={3} >
                                <div className="thumbnail-image-content-abc">
                                    <Image
                                        src="/external/images/pizza.jpg"

                                        alt="Pizza">
                                    </Image>
                                    <div className="thumbnail-content-abc">
                                        <div>
                                            <h5>Thumbnail</h5>
                                            <p>Description</p>
                                        </div>
                                        <div className="thumbnail-buttons-abc">
                                            <Button bsStyle="primary"
                                                    style={{padding:"2px 6px",border:"none"}}
                                            ><Glyphicon glyph="save"/></Button>
                                            &nbsp;
                                            <Button bsStyle="default"
                                                    style={{padding:"2px 6px",border:"none"}}
                                            ><Glyphicon glyph="save"/></Button>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3} lg={3} >
                                <div className="thumbnail-image-content-abc">
                                    <Image
                                        src="/external/images/pizza.jpg"
                                        alt="Pizza">
                                    </Image>
                                    <div className="thumbnail-content-abc">
                                        <div>
                                            <h5>Thumbnail</h5>
                                            <p>Description</p>
                                        </div>
                                        <div className="thumbnail-buttons-abc">
                                            <Button bsStyle="primary"
                                                    style={{padding:"2px 6px",border:"none"}}
                                            ><Glyphicon glyph="save"/></Button>
                                            &nbsp;
                                            <Button bsStyle="default"
                                                    style={{padding:"2px 6px",border:"none"}}
                                            ><Glyphicon glyph="save"/></Button>
                                        </div>
                                    </div>

                                    <div  className="thumbnail-operator-abc">
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="pencil"/></Button>
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="trash"/></Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Grid>

                </AbcPanel>
                <AbcPanel  header={productHeader}>
                    <Grid>
                        <Row>
                            <Col xs={6} xp={4} sm={4} md={3} lg={3} >
                                <div className="thumbnail-image-content-abc">
                                    <Image
                                        src="/external/images/465430911.jpg"
                                        alt="Pizza">
                                    </Image>
                                    <div className="thumbnail-content-abc"
                                         style={{color:"red"}}>
                                        <h5  >公开测试部分上海区代理</h5>
                                        <p >支付类试用12个月</p>
                                        <Button bsStyle="primary"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                        &nbsp;
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                    </div>
                                    <div  className="thumbnail-operator-abc">
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="pencil"/></Button>
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="trash"/></Button>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3} lg={3} >
                                <div className="thumbnail-image-content-abc">
                                    <Image
                                        src="/external/images/607599704.jpg"
                                        circle
                                        alt="Pizza">
                                    </Image>
                                    <div className="thumbnail-content-abc">
                                        <h5>公开测试部分上海区代理</h5>
                                        <p>支付类试用12个月</p>
                                        <Button bsStyle="primary"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                        &nbsp;
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3} lg={3} >
                                <div className="thumbnail-image-content-abc">
                                    <Image
                                        src="/external/images/766934548.jpg"
                                        alt="Pizza">
                                    </Image>
                                    <div className="thumbnail-content-abc">
                                        <h5>公开测试部分北京区代理</h5>
                                        <p>三个月开放</p>
                                        <Button bsStyle="primary"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                        &nbsp;
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3} lg={3} >
                                <div className="thumbnail-image-content-abc">
                                    <Image
                                        src="/external/images/-905596488.jpg"

                                        alt="Pizza">
                                    </Image>
                                    <div className="thumbnail-content-abc">
                                        <h5>Thumbnail</h5>
                                        <p>Description</p>
                                        <Button bsStyle="primary"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                        &nbsp;
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3} lg={3} >
                                <div className="thumbnail-image-content-abc">
                                    <Image
                                        src="/external/images/944876135.jpg"
                                        alt="Pizza">
                                    </Image>
                                    <div className="thumbnail-content-abc">
                                        <h5>Thumbnail</h5>
                                        <p>Description</p>
                                        <Button bsStyle="primary"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                        &nbsp;
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                    </div>
                                    <div  className="thumbnail-operator-abc">
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="pencil"/></Button>
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="trash"/></Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Grid>

                </AbcPanel>
                <AbcPanel  header={authenticationAdimHeader}>
                    <Grid>
                        <Row>
                            <Col xs={3} xp={2} sm={2} md={2} lg={1} >
                                <div className="thumbnail-b-image-abc">
                                    <Image
                                        src="/external/images/1441742482.jpg"
                                        className="b-image-xs"
                                        alt="Pizza">
                                    </Image>
                                    <div className="thumbnail-xs4-abc"
                                         style={{color:"red"}}>
                                        <h5>上海区代理</h5>
                                        <p >试用12个月</p>
                                        <Button bsStyle="primary"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={3} xp={2} sm={2} md={2} lg={1} >
                                <div className="thumbnail-b-image-abc">
                                    <Image
                                        src="/external/images/1441742482.jpg"
                                        className="b-image-xs"
                                        circle
                                        alt="Pizza">
                                    </Image>
                                    <div className="thumbnail-xs4-abc">
                                        <h5>中心</h5>
                                        <p>中心说明</p>
                                        <Button bsStyle="primary"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                        &nbsp;
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={3} xp={2} sm={2} md={2} lg={1} >
                                <div className="thumbnail-b-image-abc">
                                    <Image
                                        src="/external/images/burger.jpg"
                                        className="b-image-xs"
                                        alt="Pizza">
                                    </Image>
                                    <div className="thumbnail-xs4-abc">
                                        <h5>北京区代理</h5>
                                        <p>三个月开放</p>
                                        <Button bsStyle="primary"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                        &nbsp;
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={3} xp={2} sm={2} md={2} lg={1} >
                                <div className="thumbnail-b-image-abc">
                                    <Image
                                        src="/external/images/IMG_20160930_194031.jpg"
                                        className="b-image-xs"
                                        alt="Pizza">
                                    </Image>
                                    <div className="thumbnail-xs4-abc">
                                        <h5>Thumbnail</h5>
                                        <p>Description</p>
                                        <Button bsStyle="primary"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                         <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={3} xp={2} sm={2} md={2} lg={1} >
                                <div className="thumbnail-b-image-abc">
                                    <Image
                                        src="/external/images/IMG_20161004_123305.jpg"
                                        className="b-image-xs"
                                        alt="Pizza">
                                    </Image>
                                    <div className="thumbnail-xs4-abc">
                                        <h5>Thumbnail</h5>
                                        <p>Description</p>
                                        <Button bsStyle="primary"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Grid>

                </AbcPanel>
                <AbcPanel  header={productHotHeader}>
                    <Grid className="container-abc">
                        <Row>
                            <Col xs={6} xp={3} sm={3} md={2}  lg={2}>
                                <div className="thumbnail-b-image-abc">

                                    <div className="thumbnail-md-abc">
                                        <h6>公开测试部分东北区代理</h6>
                                        <p>支付类试用12个月</p>
                                    </div>


                                    <Row>
                                        <Col xs={12} sm={12} md={12} lg={12}>
                                            <Image
                                                className="b-image"
                                                src="/external/images/kebap.jpg">
                                            </Image>
                                        </Col>
                                    </Row>
                                    <div className="thumbnail-md-abc">
                                        <h6>公开测试部分上海区代理</h6>
                                        <p>支付类试用12个月</p>
                                    </div>
                                    <Row>
                                        <Col  xs={12} sm={12} md={12} lg={12}>
                                            <div className="thumbnail-inline-abc">
                                                <Button bsStyle="primary"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="pencil"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="trash"/></Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs={6} xp={3} sm={3} md={2}  lg={2}>
                                <div className="thumbnail-b-image-abc">
                                    <div className="thumbnail-md-abc">
                                        <h6  >公开测试部分上海区代理</h6>

                                    </div>
                                    <Row>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div className="thumbnail-inline-abc">

                                                <Button bsStyle="primary"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                                &nbsp;
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                            </div>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div  className="thumbnail-inline-abc">
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="pencil"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="trash"/></Button>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Image
                                            className="b-image"
                                            src="/external/images/kebap.jpg">
                                        </Image>
                                    </Row>
                                    <div className="thumbnail-md-abc">
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                        <p >支付类试用12个月</p>
                                    </div>

                                </div>
                            </Col>
                            <Col xs={6} xp={3} sm={3} md={2}  lg={2}>
                                <div className="thumbnail-b-image-abc">
                                    <div className="thumbnail-md-abc">
                                        <h6  >公开测试部分上海区代理</h6>

                                    </div>


                                    <Row>
                                        <Image
                                            className="b-image"
                                            src="/external/images/kebap.jpg">
                                        </Image>
                                    </Row>
                                    <Row>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div className="thumbnail-inline-abc">

                                                <Button bsStyle="primary"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                                &nbsp;
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                            </div>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div  className="thumbnail-inline-abc">
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="pencil"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="trash"/></Button>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="thumbnail-md-abc">
                                        <h6 >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                        <p >支付类试用12个月</p>
                                    </div>

                                </div>
                            </Col>
                            <Col xs={6} xp={3} sm={3} md={2}  lg={2}>
                                <div className="thumbnail-b-image-abc">
                                    <div className="thumbnail-md-abc">
                                        <h6  >公开测试部分上海区代理</h6>

                                    </div>


                                    <Row>
                                        <Image
                                            className="b-image"
                                            src="/external/images/kebap.jpg">
                                        </Image>
                                    </Row>
                                    <div className="thumbnail-md-abc">
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <Row>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div className="thumbnail-inline-abc">

                                                <Button bsStyle="primary"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                                &nbsp;
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                            </div>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div  className="thumbnail-inline-abc">
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="pencil"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="trash"/></Button>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div> <p >支付类试用12个月</p></div>
                                </div>
                            </Col>
                            <Col xs={6} xp={3} sm={3} md={2}  lg={2}>
                                <div className="thumbnail-b-image-abc">
                                    <div className="thumbnail-md-abc">
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <Row>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div className="thumbnail-inline-abc">

                                                <Button bsStyle="primary"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                                &nbsp;
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                            </div>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div  className="thumbnail-inline-abc">
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="pencil"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="trash"/></Button>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Image
                                            className="b-image"
                                            src="/external/images/kebap.jpg">
                                        </Image>
                                    </Row>
                                    <div className="thumbnail-md-abc">
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>

                                </div>
                            </Col>
                            <Col xs={6} xp={3} sm={3} md={2}  lg={2}>
                                <div className="thumbnail-b-image-abc">
                                    <div className="thumbnail-md-abc">
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <Row>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div className="thumbnail-inline-abc">

                                                <Button bsStyle="primary"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                                &nbsp;
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                            </div>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div  className="thumbnail-inline-abc">
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="pencil"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="trash"/></Button>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Image
                                            className="b-image"
                                            src="/external/images/kebap.jpg">
                                        </Image>
                                    </Row>
                                    <div className="thumbnail-md-abc">
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </AbcPanel>
                <AbcPanel  header={authenticationListHeader}>
                    <Grid className="container-abc">
                        <Row>
                            <Col xs={6} xp={4} sm={4} md={3}  lg={3}>
                                <div className="thumbnail-b-image-abc">
                                    <div >
                                        <h6>公开测试部分上海区代理</h6>
                                        <p>支付类试用12个月</p>
                                    </div>
                                    <Row>
                                        <Col  xs={12} sm={12} md={12} lg={12}>
                                            <div className="thumbnail-inline-abc">
                                                <Button bsStyle="primary"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="pencil"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="trash"/></Button>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col xs={12} sm={12} md={12} lg={12}>
                                            <Image
                                                src="/external/images/IMG_20161004_123456.jpg">
                                            </Image>
                                        </Col>
                                    </Row>

                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3}  lg={3}>
                                <div className="thumbnail-b-image-abc">
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <Row>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div className="thumbnail-inline-abc">

                                                <Button bsStyle="primary"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                                &nbsp;
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                            </div>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div  className="thumbnail-inline-abc">
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="pencil"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="trash"/></Button>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Image
                                            src="/external/images/IMG_20161004_123546.jpg">
                                        </Image>
                                    </Row>

                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3}  lg={3}>
                                <div className="thumbnail-b-image-abc">
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <Row>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div className="thumbnail-inline-abc">

                                                <Button bsStyle="primary"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                                &nbsp;
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                            </div>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div  className="thumbnail-inline-abc">
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="pencil"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="trash"/></Button>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Image
                                            src="/external/images/IMG_20161004_123823.jpg">
                                        </Image>
                                    </Row>

                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3}  lg={3}>
                                <div className="thumbnail-b-image-abc">
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <Row>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div className="thumbnail-inline-abc">

                                                <Button bsStyle="primary"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                                &nbsp;
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                            </div>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div  className="thumbnail-inline-abc">
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="pencil"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="trash"/></Button>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Image
                                            src="/external/images/IMG_20161004_123900.jpg">
                                        </Image>
                                    </Row>

                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3}  lg={3}>
                                <div className="thumbnail-b-image-abc">
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <Row>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div className="thumbnail-inline-abc">

                                                <Button bsStyle="primary"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                                &nbsp;
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                            </div>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div  className="thumbnail-inline-abc">
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="pencil"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="trash"/></Button>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Image
                                            src="/external/images/IMG_20161004_124241.jpg">
                                        </Image>
                                    </Row>

                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3}  lg={3}>
                                <div className="thumbnail-b-image-abc">
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <Row>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div className="thumbnail-inline-abc">

                                                <Button bsStyle="primary"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                                &nbsp;
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                            </div>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div  className="thumbnail-inline-abc">
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="pencil"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="trash"/></Button>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Image
                                            src="/external/images/nems.jpg">
                                        </Image>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </AbcPanel>
                <AbcPanel  header={authenticationListHeader}>
                    <Grid className="container-abc">
                        <Row>
                            <Col xs={6} xp={4} sm={4} md={3}  lg={3}>
                                <div className="thumbnail-b-image-abc">
                                    <div >
                                        <h6>公开测试部分上海区代理</h6>
                                        <p>支付类试用12个月</p>
                                    </div>
                                    <Row>
                                        <Col  xs={12} sm={12} md={12} lg={12}>
                                            <div className="thumbnail-inline-abc">
                                                <Button bsStyle="primary"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="pencil"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="trash"/></Button>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col xs={12} sm={12} md={12} lg={12}>
                                            <Image
                                                src="/external/images/kebap.jpg">
                                            </Image>
                                        </Col>
                                    </Row>
                                    <div >
                                        <h6>公开测试部分上海区代理</h6>
                                        <p>支付类试用12个月</p>
                                    </div>

                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3}  lg={3}>
                                <div className="thumbnail-b-image-abc">
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <Row>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div className="thumbnail-inline-abc">

                                                <Button bsStyle="primary"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                                &nbsp;
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                            </div>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div  className="thumbnail-inline-abc">
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="pencil"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="trash"/></Button>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Image
                                            src="/external/images/kebap.jpg">
                                        </Image>
                                    </Row>
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>

                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3}  lg={3}>
                                <div className="thumbnail-b-image-abc">
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <Row>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div className="thumbnail-inline-abc">

                                                <Button bsStyle="primary"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                                &nbsp;
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                            </div>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div  className="thumbnail-inline-abc">
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="pencil"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="trash"/></Button>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Image
                                            src="/external/images/kebap.jpg">
                                        </Image>
                                    </Row>
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>

                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3}  lg={3}>
                                <div className="thumbnail-b-image-abc">
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <Row>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div className="thumbnail-inline-abc">

                                                <Button bsStyle="primary"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                                &nbsp;
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                            </div>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div  className="thumbnail-inline-abc">
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="pencil"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="trash"/></Button>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Image
                                            src="/external/images/kebap.jpg">
                                        </Image>
                                    </Row>
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>

                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3}  lg={3}>
                                <div className="thumbnail-b-image-abc">
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <Row>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div className="thumbnail-inline-abc">

                                                <Button bsStyle="primary"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                                &nbsp;
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                            </div>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div  className="thumbnail-inline-abc">
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="pencil"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="trash"/></Button>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Image
                                            src="/external/images/90000002_thumb.jpg">
                                        </Image>
                                    </Row>
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>

                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3}  lg={3}>
                                <div className="thumbnail-b-image-abc">
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <Row>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div className="thumbnail-inline-abc">

                                                <Button bsStyle="primary"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                                &nbsp;
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                            </div>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div  className="thumbnail-inline-abc">
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="pencil"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="trash"/></Button>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Image
                                            src="/external/images/sushis.jpg">
                                        </Image>
                                    </Row>
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </AbcPanel>
                <AbcPanel  id="productListHeader" ref="productListHeader"
                           key="productListHeader"  header={productListHeader}
                           onClick={this.handleClick.bind(this)}

                >
                    <Grid className="container-abc">
                        <Row>
                            <Col xs={6} xp={6} sm={6} md={3}  lg={3}>
                                <div className="thumbnail-b-image-abc">
                                    <div >
                                        <h6>公开测试部分上海区代理</h6>
                                        <p>支付类试用12个月

                                        </p>
                                    </div>
                                    <Row>
                                        <Col  xs={12} sm={12} md={12} lg={12}>
                                            <div className="thumbnail-inline-abc">
                                                <Button bsStyle="primary"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="pencil"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="trash"/></Button>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col xs={12} sm={12} md={12} lg={12}>
                                            <Image
                                                src="/external/images/restau05_mini.jpg">
                                            </Image>
                                        </Col>
                                    </Row>
                                    <div >
                                        <h6>公开测试部分上海区代理</h6>
                                        <p>支付类试用12个月</p>
                                    </div>
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6} xp={6} sm={6} md={3}  lg={3}>
                                <div className="thumbnail-b-image-abc">
                                    <div >
                                        <h6>公开测试部分上海区代理</h6>
                                        <p>支付类试用12个月</p>
                                    </div>
                                    <Row>
                                        <Col  xs={12} sm={12} md={12} lg={12}>
                                            <div className="thumbnail-inline-abc">
                                                <Button bsStyle="primary"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="pencil"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="trash"/></Button>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col xs={12} sm={12} md={12} lg={12}>
                                            <Image
                                                src="/external/images/restau05i.jpg">
                                            </Image>
                                        </Col>
                                    </Row>
                                    <div >
                                        <h6>公开测试部分上海区代理</h6>
                                        <p>支付类试用12个月</p>
                                    </div>
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <div >
                                        <h6>公开测试部分上海区代理</h6>
                                        <p>支付类试用12个月</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </AbcPanel>
                <AbcPanel  header={authenticationListHeader}>
                    <Grid className="container-abc">
                        <Row>
                            <Col xs={6} xp={4} sm={4} md={3}  lg={3}>
                            <div className="thumbnail-b-image-abc">
                                <div >
                                    <h6>公开测试部分上海区代理</h6>
                                    <p>支付类试用12个月</p>
                                </div>
                                <Row>
                                    <Col  xs={12} sm={12} md={12} lg={12}>
                                        <div className="thumbnail-inline-abc">
                                            <Button bsStyle="primary"
                                                    style={{padding:"2px 6px",border:"none"}}
                                            ><Glyphicon glyph="save"/></Button>
                                             <Button bsStyle="default"
                                                    style={{padding:"2px 6px",border:"none"}}
                                            ><Glyphicon glyph="save"/></Button>
                                            <Button bsStyle="default"
                                                    style={{padding:"2px 6px",border:"none"}}
                                            ><Glyphicon glyph="pencil"/></Button>
                                            <Button bsStyle="default"
                                                    style={{padding:"2px 6px",border:"none"}}
                                            ><Glyphicon glyph="trash"/></Button>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                     <Image
                                        src="/external/images/kebap.jpg">
                                     </Image>
                                     </Col>
                                </Row>
                                <div >
                                    <h6>公开测试部分上海区代理</h6>
                                    <p>支付类试用12个月</p>
                                </div>
                                <div >
                                    <h6  >公开测试部分上海区代理</h6>
                                    <p >支付类试用12个月</p>
                                </div>
                                <div >
                                    <h6  >公开测试部分上海区代理</h6>
                                    <p >支付类试用12个月</p>
                                </div>
                                <div >
                                    <h6  >公开测试部分上海区代理</h6>
                                    <p >支付类试用12个月</p>
                                </div>
                            </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3}  lg={3}>
                                <div className="thumbnail-b-image-abc">
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <Row>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div className="thumbnail-inline-abc">

                                                <Button bsStyle="primary"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                                &nbsp;
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                            </div>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div  className="thumbnail-inline-abc">
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="pencil"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="trash"/></Button>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Image
                                            src="/external/images/kebap.jpg">
                                        </Image>
                                    </Row>
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3}  lg={3}>
                                <div className="thumbnail-b-image-abc">
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <Row>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div className="thumbnail-inline-abc">

                                                <Button bsStyle="primary"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                                &nbsp;
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                            </div>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div  className="thumbnail-inline-abc">
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="pencil"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="trash"/></Button>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Image
                                            src="/external/images/kebap.jpg">
                                        </Image>
                                    </Row>
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3}  lg={3}>
                                <div className="thumbnail-b-image-abc">
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <Row>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div className="thumbnail-inline-abc">

                                                <Button bsStyle="primary"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                                &nbsp;
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                            </div>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div  className="thumbnail-inline-abc">
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="pencil"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="trash"/></Button>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Image
                                            src="/external/images/kebap.jpg">
                                        </Image>
                                    </Row>
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3}  lg={3}>
                                <div className="thumbnail-b-image-abc">
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <Row>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div className="thumbnail-inline-abc">

                                                <Button bsStyle="primary"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                                &nbsp;
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                            </div>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div  className="thumbnail-inline-abc">
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="pencil"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="trash"/></Button>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Image
                                            src="/external/images/kebap.jpg">
                                        </Image>
                                    </Row>
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3}  lg={3}>
                                <div className="thumbnail-b-image-abc">
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <Row>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div className="thumbnail-inline-abc">

                                                <Button bsStyle="primary"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                                &nbsp;
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="save"/></Button>
                                            </div>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div  className="thumbnail-inline-abc">
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="pencil"/></Button>
                                                <Button bsStyle="default"
                                                        style={{padding:"2px 6px",border:"none"}}
                                                ><Glyphicon glyph="trash"/></Button>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Image
                                            src="/external/images/kebap.jpg">
                                        </Image>
                                    </Row>
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </AbcPanel>
                <AbcPanel  header={authenticationAdimHeader}>
                    <Grid>
                        <Row>
                            <Col xs={6} xp={4} sm={4} md={3} lg={3} >
                                <div className="thumbnail-abc">
                                    <Image
                                        src="/external/images/kebap.jpg"
                                        alt="Pizza">
                                    </Image>
                                    <div className="thumbnail-content-abc"
                                         style={{color:"red"}}>
                                        <h5  >公开测试部分上海区代理</h5>
                                        <p >支付类试用12个月</p>
                                        <Button bsStyle="primary"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                        &nbsp;
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                    </div>
                                    <div  className="thumbnail-operator-abc">
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="pencil"/></Button>
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="trash"/></Button>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3} lg={3} >
                                <div className="thumbnail-abc">
                                    <Image
                                        src="/external/images/pizza.jpg"
                                        circle
                                        alt="Pizza">
                                    </Image>
                                    <div className="thumbnail-content-abc">
                                        <h5>Thumbnail</h5>
                                        <p>Description</p>
                                        <Button bsStyle="primary"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                        &nbsp;
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3} lg={3} >
                                <div className="thumbnail-abc">
                                    <Image
                                        src="/external/images/pizza.jpg"
                                        alt="Pizza">
                                    </Image>
                                    <div className="thumbnail-content-abc">
                                        <h5>公开测试部分北京区代理</h5>
                                        <p>三个月开放</p>
                                        <Button bsStyle="primary"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                        &nbsp;
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3} lg={3} >
                                <div className="thumbnail-abc">
                                    <Image
                                        src="/external/images/pizza.jpg"

                                        alt="Pizza">
                                    </Image>
                                    <div className="thumbnail-content-abc">
                                        <h5>Thumbnail</h5>
                                        <p>Description</p>
                                        <Button bsStyle="primary"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                        &nbsp;
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3} lg={3} >
                                <div className="thumbnail-abc">
                                    <Image
                                        src="/external/images/pizza.jpg"
                                        alt="Pizza">
                                    </Image>
                                    <div className="thumbnail-content-abc">
                                        <h5>Thumbnail</h5>
                                        <p>Description</p>
                                        <Button bsStyle="primary"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                        &nbsp;
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                    </div>
                                    <div  className="thumbnail-operator-abc">
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="pencil"/></Button>
                                        <Button bsStyle="default"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="trash"/></Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Grid>

                </AbcPanel>
                <Media.List style={{outline:"1px solid #ddd"}}>
                    <Media.ListItem style={{display:"table"}}>
                        <Media style={{margin:"20px 1px",
                                        padding:"10px 6px",outlineWidth:"medium",
                                        outline:"1px solid #ddd",
                                        display:"table-row"}}>
                            <Media.Left style={{marginRight:"6px",display:"table-row"}}>
                                    <span style={{margin:"6px 6px",display:"table-cell",
                                    padding:"10px"}}>test</span>
                                <img width={64} height={64} src="/external/images/pizza.jpg"
                                     style={{margin:"6px 6px",padding:"10px"}}
                                     alt="Image"/>
                            </Media.Left>

                            <Media.Body style={{border:"1px solid #ddd"}}>
                                <Media.Heading>Nested media heading</Media.Heading>
                                <p>Cras sit amet nibh libero, in gravida nulla.
                                    Nulla vel metus scelerisque ante sollicitudin commodo.
                                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                                <p>Cras sit amet nibh libero, in gravida nulla.
                                    Nulla vel metus scelerisque ante sollicitudin commodo.
                                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                                <p>Cras sit amet nibh libero, in gravida nulla.
                                    Nulla vel metus scelerisque ante sollicitudin commodo.
                                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                            </Media.Body>
                        </Media>
                        <Media style={{margin:"20px 1px",
                                        padding:"10px 6px",outlineWidth:"medium",
                                        outline:"1px solid #ddd",
                                        display:"table-row"}}>
                            <Media.Left style={{marginRight:"6px",display:"table-row"}}>
                                <span style={{margin:"6px 6px",display:"table-cell", padding:"10px"}}>test</span>
                                <img width={64} height={64} src="/external/images/pizza.jpg"
                                     style={{margin:"6px 6px",padding:"10px"}}
                                     alt="Image"/>
                            </Media.Left>
                            <Media.Body style={{border:"1px solid #ddd"}}>
                                <Media.Heading>Nested media heading</Media.Heading>
                                <p>Cras sit amet nibh libero, in gravida nulla.
                                    Nulla vel metus scelerisque ante sollicitudin commodo.
                                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                                <p>Cras sit amet nibh libero, in gravida nulla.
                                    Nulla vel metus scelerisque ante sollicitudin commodo.
                                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                                <p>Cras sit amet nibh libero, in gravida nulla.
                                    Nulla vel metus scelerisque ante sollicitudin commodo.
                                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                            </Media.Body>
                        </Media>

                        <Media style={{margin:"20px 1px" ,
                                        padding:"10px 6px",outlineWidth:"medium",
                                        outline:"1px solid #ddd",
                                        display:"table-row"}}>
                            <Media.Left style={{marginRight:"6px",display:"table-row"}}>
                                <span style={{margin:"6px 6px",display:"table-cell", padding:"10px"}}>test</span>
                                <img width={64} height={64} src="/external/images/pizza.jpg"
                                     style={{margin:"6px 6px",padding:"10px"}}
                                     alt="Image"/>
                            </Media.Left>
                            <Media.Body style={{border:"1px solid #ddd"}}>
                                <AbcPanel  header={productHeader}>
                                    <Grid>
                                        <Row>
                                            <Col xs={12} xp={6} sm={4} md={3} lg={3} >
                                                <div className="thumbnail-image-content-abc">
                                                    <Image
                                                        src="/external/images/465430911.jpg"
                                                        alt="Pizza">
                                                    </Image>
                                                    <div className="thumbnail-content-abc"
                                                         style={{color:"red"}}>
                                                        <h5  >公开测试部分上海区代理</h5>
                                                        <p >支付类试用12个月</p>
                                                        <Button bsStyle="primary"
                                                                style={{padding:"2px 6px",border:"none"}}
                                                        ><Glyphicon glyph="save"/></Button>
                                                        &nbsp;
                                                        <Button bsStyle="default"
                                                                style={{padding:"2px 6px",border:"none"}}
                                                        ><Glyphicon glyph="save"/></Button>
                                                    </div>
                                                    <div  className="thumbnail-operator-abc">
                                                        <Button bsStyle="default"
                                                                style={{padding:"2px 6px",border:"none"}}
                                                        ><Glyphicon glyph="pencil"/></Button>
                                                        <Button bsStyle="default"
                                                                style={{padding:"2px 6px",border:"none"}}
                                                        ><Glyphicon glyph="trash"/></Button>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={12} xp={6} sm={4} md={3} lg={3} >
                                                <div className="thumbnail-image-content-abc">
                                                    <Image
                                                        src="/external/images/607599704.jpg"
                                                        circle
                                                        alt="Pizza">
                                                    </Image>
                                                    <div className="thumbnail-content-abc">
                                                        <h5>公开测试部分上海区代理</h5>
                                                        <p>支付类试用12个月</p>
                                                        <Button bsStyle="primary"
                                                                style={{padding:"2px 6px",border:"none"}}
                                                        ><Glyphicon glyph="save"/></Button>
                                                        &nbsp;
                                                        <Button bsStyle="default"
                                                                style={{padding:"2px 6px",border:"none"}}
                                                        ><Glyphicon glyph="save"/></Button>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={12} xp={6} sm={4} md={3} lg={3} >
                                                <div className="thumbnail-image-content-abc">
                                                    <Image
                                                        src="/external/images/766934548.jpg"
                                                        alt="Pizza">
                                                    </Image>
                                                    <div className="thumbnail-content-abc">
                                                        <h5>公开测试部分北京区代理</h5>
                                                        <p>三个月开放</p>
                                                        <Button bsStyle="primary"
                                                                style={{padding:"2px 6px",border:"none"}}
                                                        ><Glyphicon glyph="save"/></Button>
                                                        &nbsp;
                                                        <Button bsStyle="default"
                                                                style={{padding:"2px 6px",border:"none"}}
                                                        ><Glyphicon glyph="save"/></Button>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={12} xp={6} sm={4} md={3} lg={3} >
                                                <div className="thumbnail-image-content-abc">
                                                    <Image
                                                        src="/external/images/-905596488.jpg"

                                                        alt="Pizza">
                                                    </Image>
                                                    <div className="thumbnail-content-abc">
                                                        <h5>Thumbnail</h5>
                                                        <p>Description</p>
                                                        <Button bsStyle="primary"
                                                                style={{padding:"2px 6px",border:"none"}}
                                                        ><Glyphicon glyph="save"/></Button>
                                                        &nbsp;
                                                        <Button bsStyle="default"
                                                                style={{padding:"2px 6px",border:"none"}}
                                                        ><Glyphicon glyph="save"/></Button>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={12} xp={6} sm={4} md={3} lg={3} >
                                                <div className="thumbnail-image-content-abc">
                                                    <Image
                                                        src="/external/images/944876135.jpg"
                                                        alt="Pizza">
                                                    </Image>
                                                    <div className="thumbnail-content-abc">
                                                        <h5>Thumbnail</h5>
                                                        <p>Description</p>
                                                        <Button bsStyle="primary"
                                                                style={{padding:"2px 6px",border:"none"}}
                                                        ><Glyphicon glyph="save"/></Button>
                                                        &nbsp;
                                                        <Button bsStyle="default"
                                                                style={{padding:"2px 6px",border:"none"}}
                                                        ><Glyphicon glyph="save"/></Button>
                                                    </div>
                                                    <div  className="thumbnail-operator-abc">
                                                        <Button bsStyle="default"
                                                                style={{padding:"2px 6px",border:"none"}}
                                                        ><Glyphicon glyph="pencil"/></Button>
                                                        <Button bsStyle="default"
                                                                style={{padding:"2px 6px",border:"none"}}
                                                        ><Glyphicon glyph="trash"/></Button>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Grid>

                                </AbcPanel>
                            </Media.Body>
                        </Media>
                        <Media style={{margin:"20px 1px" ,
                                        padding:"10px 6px",outlineWidth:"medium",
                                        outline:"1px solid #ddd",
                                        display:"table-row"}}>
                            <Media.Left style={{marginRight:"6px",display:"table-row"}}>
                                <span style={{margin:"6px 6px",display:"table-cell", padding:"10px"}}>test</span>
                                <img width={64} height={64} src="/external/images/pizza.jpg"
                                     style={{margin:"6px 6px",padding:"10px"}}
                                     alt="Image"/>
                            </Media.Left>
                            <Media.Body style={{border:"1px solid #ddd"}}>
                                <AbcPanel  header={produceVendderCashListHeader}>
                                    <Grid className="container-abc">
                                        <Row>
                                            <Col xs={12} xp={4} sm={4} md={3}  lg={3}>
                                                <div className="thumbnail-b-image-abc">
                                                    <div className="b-content-continer">
                                                        <h6>公开测试部分上海区代理</h6>
                                                        <p>支付类试用12个月</p>
                                                    </div>
                                                    <Row>
                                                        <div className="b-image-continer">

                                                            <Image
                                                                className="b-image-inline"
                                                                src="/external/images/IMG_20161004_123456.jpg">
                                                            </Image>

                                                            <Image
                                                                className="b-image-inline"
                                                                src="/external/images/1025118364.jpg">
                                                            </Image>

                                                        </div>
                                                    </Row>
                                                </div>
                                            </Col>
                                            <Col xs={12} xp={4} sm={4} md={3}  lg={3}>
                                                <div className="thumbnail-b-image-abc">
                                                    <div className="b-content-continer">
                                                        <h6  >公开测试部分上海区代理</h6>
                                                        <p >支付类试用12个月</p>
                                                    </div>

                                                    <Row>
                                                        <div className="b-image-continer">

                                                            <Image
                                                                className="b-image-inline"
                                                                src="/external/images/-1372248994.jpg">
                                                            </Image>

                                                            <Image
                                                                className="b-image-inline"
                                                                src="/external/images/310288666.jpg">
                                                            </Image>

                                                        </div>
                                                    </Row>

                                                </div>
                                            </Col>
                                            <Col xs={12} xp={4} sm={4} md={3}  lg={3}>
                                                <div className="thumbnail-b-image-abc">
                                                    <div className="b-content-continer">
                                                        <h6  >公开测试部分上海区代理</h6>
                                                        <p >支付类试用12个月</p>
                                                    </div>

                                                    <Row>
                                                        <div className="b-image-continer">

                                                            <Image
                                                                className="b-image-inline"
                                                                src="/external/images/IMG_20161004_123456.jpg">
                                                            </Image>

                                                            <Image
                                                                className="b-image-inline"
                                                                src="/external/images/IMG_20161004_123546.jpg">
                                                            </Image>

                                                        </div>
                                                    </Row>

                                                </div>
                                            </Col>
                                            <Col xs={12} xp={4} sm={4} md={3}  lg={3}>
                                                <div className="thumbnail-b-image-abc">
                                                    <div className="b-content-continer">
                                                        <h6  >公开测试部分上海区代理</h6>
                                                        <p >支付类试用12个月</p>
                                                    </div>

                                                    <Row>
                                                        <div className="b-image-continer">

                                                            <Image
                                                                className="b-image-inline"
                                                                src="/external/images/IMG_20161004_123823.jpg">
                                                            </Image>

                                                            <Image
                                                                className="b-image-inline"
                                                                src="/external/images/IMG_20161004_124241.jpg">
                                                            </Image>

                                                        </div>
                                                    </Row>

                                                </div>
                                            </Col>
                                            <Col xs={12} xp={4} sm={4} md={3}  lg={3}>
                                                <div className="thumbnail-b-image-abc">
                                                    <div className="b-content-continer">
                                                        <h6>公开测试部分上海区代理</h6>
                                                        <p >支付类试用12个月</p>
                                                    </div>

                                                    <Row>
                                                        <div className="b-image-continer">

                                                            <Image
                                                                className="b-image-inline"
                                                                src="/external/images/IMG_20161004_123456.jpg">
                                                            </Image>

                                                            <Image
                                                                className="b-image-inline"
                                                                src="/external/images/IMG_20161004_123456.jpg">
                                                            </Image>

                                                        </div>
                                                    </Row>

                                                </div>
                                            </Col>
                                            <Col xs={12} xp={4} sm={4} md={3}  lg={3}>
                                                <div className="thumbnail-b-image-abc">
                                                    <div className="b-content-continer">
                                                        <h6 >公开测试部分上海区代理</h6>
                                                        <p >支付类试用12个月</p>
                                                    </div>

                                                    <Row>
                                                        <div className="b-image-continer">

                                                            <Image
                                                                className="b-image-inline"
                                                                src="/external/images/IMG_20161004_124314.jpg">
                                                            </Image>

                                                            <Image
                                                                className="b-image-inline"
                                                                src="/external/images/IMG_20161019_183549.jpg">
                                                            </Image>

                                                        </div>
                                                    </Row>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </AbcPanel>
                            </Media.Body>
                        </Media>
                    </Media.ListItem>
                </Media.List>
            </AbcPanel>

        )
    }

}