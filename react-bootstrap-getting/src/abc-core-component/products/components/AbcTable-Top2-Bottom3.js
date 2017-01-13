/**
 * 列表显示方式，上面两个大图，下面三十个小图
 */

import React, { PropTypes } from 'react'
import classNames           from 'classnames'

import {Modal,Glyphicon,Grid,Row,Col,Thumbnail,
    Image,Button,Media,Checkbox,ButtonToolbar,FormControl,Table} from '../../../abc-bootstrap'

import AbcPanel from '../../../abc-ui/AbcPanel'
import lgShape from './lg-shape';
import smShape from './sm-shape';
import AbcLabelLimit, {lgLimit} from './ui-limit'

export class AbcTableTop2Cell extends React.Component{

    static propTypes =
    {
        lgObject: lgShape.isRequired
    };

    render() {
        const {lgObject,...others}=this.props;
        return (
            <div className="abc-content-lg-top">
                <div className="abc-content">
                    <h5><AbcLabelLimit contentText={lgObject.title} limit={lgLimit.title} /></h5>
                    <p>{lgObject.description}</p>
                </div>
                <Image
                    className="image-top"
                    src={lgObject.portrait}>
                </Image>
            </div>
        )
    }
}

export class AbcTableBottom3Cell extends React.Component{

    static propTypes =
    {
        smObject: lgShape.isRequired
    };

    render() {
        const {smObject,...others}=this.props;
        return (
            <div className="abc-content-sm">
                <div className="abc-content">
                    <div>
                        <h5>{smObject.title}</h5>
                        <p>{smObject.description}</p>
                    </div>
                </div>
                <Image
                    src={smObject.portrait}
                    className="image"
                    alt="Pizza">
                </Image>
            </div>
        )
    }
}

export class AbcTableBottom3Row extends React.Component{

    static propTypes =
    {
        lgObjects: PropTypes.arrayOf(lgShape).isRequired,
        smObjects: PropTypes.arrayOf(smShape).isRequired
    };

    render() {
        const {lgObjects,smObjects,...others}=this.props;
        return (
            <Col xs={12} xp={6} sm={6} md={6}  lg={4}>
                <Table className="abc-table" cellspacing="1px" cellPadding="0">
                    <tr align="center">
                    {lgObjects&&lgObjects.map&&lgObjects.map((lgObject, index) =>
                        <td colSpan="2" className="td-1-2">
                              <AbcTableTop2Cell lgObject={lgObject}
                                key={index}/>
                        </td>
                      )}
                      </tr>
                </Table>
                <Table className="abc-table-nobuttom" cellspacing="1px" cellPadding="0" style={{marginTop:"-22px"}}>
                    <tr>
                        {smObjects&&smObjects.map&&smObjects.map((smObject, index) =>
                            <td className="td-1-2-b">
                                <AbcTableBottom3Cell smObject={smObject}
                                                  key={index}/>
                            </td>
                        )}
                    </tr>
                </Table>
            </Col>
        )
    }
}
export default class AbcTableTop2Bottom3 extends React.Component
{
    static propTypes =
    {
        header : PropTypes.object,
        lgObjects: PropTypes.arrayOf(lgShape).isRequired,
        smObjects: PropTypes.arrayOf(smShape).isRequired
    };

    render()
    {
        const {header,rowProducts,...others}=this.props;
        const panel=
           ( <AbcPanel  header={header}>
            <Grid className="container-list-abc">

                {rowProducts&&rowProducts.map&&rowProducts.map((rowProduct, index) =>
                <AbcTableBottom3Row lgObjects={rowProduct.lgObjects}
                                    smObjects={rowProduct.smObjects}/>
                )}

            </Grid>
        </AbcPanel>)
        return panel;
    }
}