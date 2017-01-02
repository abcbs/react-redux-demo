import React ,{PropTypes}from 'react';
import ReactDOM from 'react-dom';

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
        return (
            <AbcPanel>
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
                                        src="/external/images/pizza.jpg"
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
                                        src="/external/images/pizza.jpg"
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
                                        src="/external/images/pizza.jpg"
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
                                        src="/external/images/pizza.jpg"
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
                                <div className="thumbnail-image-content-abc">
                                    <Image
                                        src="/external/images/pizza.jpg"
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
                                <div className="thumbnail-image-content-abc">
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
                                <div className="thumbnail-image-content-abc">
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
                <AbcPanel  header={authenticationAdimHeader}>
                    <Grid>
                        <Row>
                            <Col xs={3} xp={2} sm={2} md={2} lg={1} >
                                <div className="thumbnail-b-image-abc">
                                    <Image
                                        src="/external/images/kebap.jpg"
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
                                        src="/external/images/pizza.jpg"
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
                                        src="/external/images/pizza.jpg"
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
                                        src="/external/images/pizza.jpg"
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
                                        src="/external/images/pizza.jpg"
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
                                    <div >
                                        <h6>公开测试部分上海区代理</h6>
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
                                </div>
                            </Col>
                            <Col xs={6} xp={3} sm={3} md={2}  lg={2}>
                                <div className="thumbnail-b-image-abc">
                                    <div >
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
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                        <p >支付类试用12个月</p>
                                    </div>

                                </div>
                            </Col>
                            <Col xs={6} xp={3} sm={3} md={2}  lg={2}>
                                <div className="thumbnail-b-image-abc">
                                    <div >
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
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                        <p >支付类试用12个月</p>
                                    </div>

                                </div>
                            </Col>
                            <Col xs={6} xp={3} sm={3} md={2}  lg={2}>
                                <div className="thumbnail-b-image-abc">
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>

                                    </div>


                                    <Row>
                                        <Image
                                            className="b-image"
                                            src="/external/images/kebap.jpg">
                                        </Image>
                                    </Row>
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
                                    <div> <p >支付类试用12个月</p></div>
                                </div>
                            </Col>
                            <Col xs={6} xp={3} sm={3} md={2}  lg={2}>
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
                                            className="b-image"
                                            src="/external/images/kebap.jpg">
                                        </Image>
                                    </Row>
                                    <div >
                                        <h6  >公开测试部分上海区代理</h6>
                                        <p >支付类试用12个月</p>
                                    </div>

                                </div>
                            </Col>
                            <Col xs={6} xp={3} sm={3} md={2}  lg={2}>
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
                                            className="b-image"
                                            src="/external/images/kebap.jpg">
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
                <AbcPanel>
                    <Media.List>
                        <Media.ListItem>
                            <Media.Left>
                                <img width={64} height={64} src="/external/images/pizza.jpg" alt="Image"/>
                            </Media.Left>
                            <Media.Body>
                                <Media.Heading>权限</Media.Heading>
                                <p>Cras sit amet nibh libero, in gravida nulla.
                                    Nulla vel metus scelerisque ante sollicitudin commodo.
                                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>

                                <Media>
                                    <Media.Left>
                                        <img width={64} height={64} src="/external/images/pizza.jpg" alt="Image"/>
                                    </Media.Left>
                                    <Media.Body>
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

                                <Media>
                                    <Media.Left>
                                        <img width={64} height={64} src="/external/images/pizza.jpg" alt="Image"/>
                                    </Media.Left>
                                    <Media.Body>
                                        <Media.Heading>Nested media heading</Media.Heading>
                                        <p>Cras sit amet nibh libero, in gravida nulla.
                                            Nulla vel metus scelerisque ante sollicitudin commodo.
                                            Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                                    </Media.Body>
                                </Media>
                            </Media.Body>
                        </Media.ListItem>
                    </Media.List>
                </AbcPanel>
            </AbcPanel>

        )
    }

}