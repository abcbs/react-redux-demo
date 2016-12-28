import React ,{PropTypes}from 'react';
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import {reduxForm,getFormValues} from 'redux-form';
import { browserHistory } from 'react-router'
import { push } from 'redux-router';

import international from '../../../abc-framework/international/internationalize'

import { preload,goto }            from '../../../abc-framework/react-isomorphic-render/redux'
import {Modal,Glyphicon,Grid,Row,Col,Thumbnail,Image,Button} from '../../../abc-bootstrap'

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
        const authenticationSearchHeader=(<HeaderTitleAndNumber numbers="17" title="权限列表"/>);
        return (
            <AbcPanel  header={authenticationSearchHeader}
                       footer={authenticationSearchHeader}>
                <AuthenticationManager formConfig={this.props.formConfig}/>
                <AuthenticationManager formConfig={this.props.formConfig}/>
                <AuthenticationManager formConfig={this.props.formConfig}/>
                <AuthenticationManager formConfig={this.props.formConfig}/>
                <AbcPanel>
                    <Grid className="container-abc">
                        <Row>
                            <Col xs={6} xp={4} sm={4} md={3}  lg={3}>
                                <div className="thumbnail-abc">
                                <Col xs={6} sm={4} md={5} lg={6}>
                                    <Image
                                        src="/external/images/kebap.jpg"
                                        height="80px"
                                        alt="242x200">
                                    </Image>
                                </Col>
                                <Col xs={6} sm={8} md={7} lg={6}>
                                    <div className="thumbnail-inline-abc">
                                        <h5>Thumbnail label</h5>
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
                                <Col xs={6} sm={4} md={5} lg={6}>
                                    <Image
                                        src="/external/images/kebap.jpg"
                                        height="80px"
                                        circle
                                        alt="242x200">
                                    </Image>
                                </Col>
                                <Col xs={6} sm={8} md={7} lg={6}>
                                    <div className="thumbnail-inline-abc">
                                        <h5>Thumbnail label</h5>
                                        <p>Description</p>
                                        <Button bsStyle="primary"
                                                style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                        &nbsp;
                                        <Button bsStyle="default"  style={{padding:"2px 6px",border:"none"}}
                                        ><Glyphicon glyph="save"/></Button>
                                    </div>
                                </Col>
                                </div>
                            </Col>
                            <Col xs={6} xp={4} sm={4} md={3} lg={3}>
                                <div className="thumbnail-abc">
                                <Col xs={6} sm={4} md={5} lg={6}>
                                    <Image
                                        src="/external/images/kebap.jpg"
                                        height="80px"
                                        alt="242x200">
                                    </Image>
                                </Col>
                                <Col xs={6} sm={8} md={7} lg={6}>
                                    <div className="thumbnail-inline-abc">
                                        <h5>Thumbnail label</h5>
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
                                <Col xs={6} sm={4} md={5} lg={6}>
                                    <Image
                                        src="/external/images/kebap.jpg"
                                        height="80px"
                                        circle
                                        alt="242x200">
                                    </Image>
                                </Col>
                                <Col xs={6} sm={8} md={7} lg={6}>
                                    <div className="thumbnail-inline-abc">
                                    <h5>Thumbnail label</h5>
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
                                <Col xs={6} sm={4} md={5} lg={6}>
                                    <Image
                                        src="/external/images/kebap.jpg"
                                        height="80px"
                                        alt="242x200">
                                    </Image>
                                </Col>
                                <Col xs={6} sm={8} md={7} lg={6}>
                                    <div className="thumbnail-inline-abc">
                                        <h5>Thumbnail label</h5>
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
                                <Col xs={6} sm={4} md={5} lg={6}>
                                    <Image
                                        src="/external/images/kebap.jpg"
                                        height="80px"
                                        circle
                                        alt="242x200">
                                    </Image>
                                </Col>
                                <Col xs={6} sm={8} md={7} lg={6}>
                                    <div className="thumbnail-inline-abc">
                                    <h6>Thumbnail label</h6>
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
                    <Grid>
                        <Row>
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
                        </Row>
                    </Grid>
                    <Grid>
                        <Row>
                           <Col xs={6} md={4}>
                               <Image height="80px" width="120px"
                                      src="/external/images/ͼƬ1.jpg"
                                      style={{position:"relative" , float:"left" ,
                                                    margin:"10px 4px"
                                               }}
                                      alt="Pizza">
                               </Image>
                               <div style={{position:"relative" , float:"left",lineHeight:"8px"}}>
                                   <h5>Thumbnail label</h5>
                                   <p>Description</p>
                                   <p>
                                       <Button bsStyle="primary"
                                               style={{padding:"2px 6px",border:"none"}}
                                       ><Glyphicon glyph="save"/></Button>
                                       &nbsp;
                                       <Button bsStyle="default"
                                               style={{padding:"2px 6px",border:"none"}}
                                       ><Glyphicon glyph="save"/></Button>
                                   </p>
                               </div>
                            </Col>
                        </Row>
                    </Grid>
                </AbcPanel>
            </AbcPanel>
        )
    }

}