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

    render() {
        const authenticationSearchHeader=(<HeaderTitleAndNumber numbers="17" title="产品查询"/>);
        const authenticationListHeader=(<HeaderTitleAndNumber numbers="10" title="产品分类"/>);
        const authenticationAdimHeader=(<HeaderTitleAndNumber numbers="10" title="管理产品"/>);
        return (
            <AbcPanel  header={authenticationSearchHeader}
                       >
                <AbcPanel  header={authenticationListHeader}>
                    <Grid className="container-abc">
                        <Row>
                            <Col xs={6} xp={4} sm={4} md={3}  lg={3}>
                                <div className="thumbnail-abc">
                                    <Row>
                                        <Image
                                            src="/external/images/kebap.jpg"
                                            height="80px"
                                            circle
                                            alt="242x200">
                                        </Image>
                                </Row>
                                <Row>
                                    <Col xs={6} sm={8} md={7} lg={8}>
                                        <div className="thumbnail-inline-abc">
                                            <h5 style={{fontSize:"8px"}}>公开测试部分上海区代理</h5>
                                            <p  style={{fontSize:"6px"}}>支付类试用12个月</p>
                                            <Button bsStyle="primary"
                                                    style={{padding:"2px 6px",border:"none"}}
                                            ><Glyphicon glyph="save"/></Button>
                                            &nbsp;
                                            <Button bsStyle="default"
                                                    style={{padding:"2px 6px",border:"none"}}
                                            ><Glyphicon glyph="save"/></Button>
                                        </div>
                                    </Col>
                                    <Col xs={6} sm={4} md={5} lg={4}>
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
                                </div>
                            </Col>

                            <Col xs={6} xp={4} sm={4} md={3} lg={3}>
                                <div className="thumbnail-abc">
                                    <Col xs={6} sm={4} md={5} lg={4}>
                                        <Image
                                            src="/external/images/kebap.jpg"
                                            height="80px"
                                            circle
                                            alt="242x200">
                                        </Image>
                                    </Col>
                                    <Col xs={6} sm={8} md={7} lg={8}>
                                        <div className="thumbnail-inline-abc">
                                            <h5>Thumbnail</h5>
                                            <p>Description</p>
                                            <Button bsStyle="primary"
                                                    style={{padding:"2px 6px",border:"none"}}
                                            ><Glyphicon glyph="save"/></Button>
                                            &nbsp;
                                            <Button bsStyle="default"  style={{padding:"2px 6px",border:"none"}}
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
                                    </Col>
                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3} lg={3}>
                                <div className="thumbnail-abc">
                                    <Col xs={6} sm={4} md={5} lg={4}>
                                        <Image
                                            src="/external/images/kebap.jpg"
                                            height="80px"
                                            circle
                                            alt="242x200">
                                        </Image>
                                    </Col>
                                    <Col xs={6} sm={8} md={7} lg={8}>
                                        <div className="thumbnail-inline-abc">
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
                                    </Col>
                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3} lg={3}>
                                <div className="thumbnail-abc">
                                    <Col xs={6} sm={4} md={5} lg={4}>
                                        <Image
                                            src="/external/images/kebap.jpg"
                                            height="80px"
                                            circle
                                            alt="242x200">
                                        </Image>
                                    </Col>
                                    <Col xs={6} sm={8} md={7} lg={8}>
                                        <div className="thumbnail-inline-abc">
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
                                    </Col>
                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3} lg={3}>
                                <div className="thumbnail-abc">
                                    <Col xs={6} sm={4} md={5} lg={4}>
                                        <Image
                                            src="/external/images/kebap.jpg"
                                            height="80px"
                                            circle
                                            alt="242x200">
                                        </Image>
                                    </Col>
                                    <Col xs={6} sm={8} md={7} lg={8}>
                                        <div className="thumbnail-inline-abc">
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
                                    </Col>
                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3} lg={3}>
                                <div className="thumbnail-abc">
                                    <Col xs={6} sm={4} md={5} lg={4}>
                                        <Image
                                            src="/external/images/kebap.jpg"
                                            height="80px"
                                            circle
                                            alt="242x200">
                                        </Image>
                                    </Col>
                                    <Col xs={6} sm={8} md={7} lg={8}>
                                        <div className="thumbnail-inline-abc">
                                            <h5>Thumbnail内部测试部分支付类业务</h5>
                                            <p>Description</p>
                                            <Button bsStyle="primary"
                                                    style={{padding:"2px 6px",border:"none"}}
                                            ><Glyphicon glyph="save"/></Button>
                                            &nbsp;
                                            <Button bsStyle="default"
                                                    style={{padding:"2px 6px",border:"none"}}
                                            ><Glyphicon glyph="save"/></Button>
                                        </div>
                                    </Col>
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
                                        <h5 style={{fontSize:"8px"}}>公开测试部分上海区代理</h5>
                                        <p  style={{fontSize:"6px"}}>支付类试用12个月</p>
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