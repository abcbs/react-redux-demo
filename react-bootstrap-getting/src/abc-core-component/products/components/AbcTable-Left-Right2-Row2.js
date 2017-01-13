/**
 * 列表显示，左边1列，右边两列，共计两行
 */
import React, { PropTypes } from 'react'
import classNames           from 'classnames'

import {Modal,Glyphicon,Grid,Row,Col,Thumbnail,
    Image,Button,Media,Checkbox,ButtonToolbar,FormControl,Table} from '../../../abc-bootstrap'

import AbcPanel from '../../../abc-ui/AbcPanel'
import lgShape from './lg-shape';
import smShape from './sm-shape';
import AbcLabelLimit, {lgLimit} from './ui-limit'

import {composeTableLargeCell,AbcTableSmallCell,AbcTableGrid,AbcTableCol,AbcTableLargeTd} from './AbcTable-Top2-Bottom3'

export class AbcTableLargeCellWithToolbar extends React.Component{

     render() {
        const {lgObject,containerClass,contentClass,imageClass,...others}=this.props;
        return (
            <div className={containerClass}>
                <div className={contentClass}>
                    <h5><AbcLabelLimit contentText={lgObject.title} limit={lgLimit.title} /></h5>
                    <p>{lgObject.description}</p>
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
                    className='image-1-1'
                    src={lgObject.portrait}>
                </Image>
            </div>

        )
    }
}

export class AbcTableLargeCell extends React.Component{

    render() {
        const {lgObject,containerClass,contentClass,imageClass,...others}=this.props;
        return (
            <div className={containerClass}>
                <div className={contentClass}>
                    <h5><AbcLabelLimit contentText={lgObject.title} limit={lgLimit.title} /></h5>
                    <p>{lgObject.description}</p>
                </div>
                <Image
                    className='image-1-1'
                    src={lgObject.portrait}>
                </Image>
            </div>

        )
    }
}

//每行数据UI
export class AbcTableRow extends React.Component{

    static propTypes =
    {
        lgObjects: PropTypes.arrayOf(lgShape).isRequired,
        smObjects: PropTypes.arrayOf(smShape).isRequired
    };

    render() {
        const {lgObjects,smObjects,...others}=this.props;
        const TableLargeCell=composeTableLargeCell()(AbcTableLargeCell);
        return (
            <AbcTableCol>
                <Table className="abc-table" cellspacing="1px" cellPadding="0">
                    <tr align="center">
                        {lgObjects&&lgObjects.map&&lgObjects.map((lgObject, index) =>
                            <AbcTableLargeTd>
                                <TableLargeCell lgObject={lgObject}
                                                key={index}/>
                            </AbcTableLargeTd>
                        )}
                        {smObjects&&smObjects.map&&smObjects.map((smObject, index) =>
                            <td className="td-1-2-b">
                                <AbcTableSmallCell smObject={smObject}
                                                   key={index}/>
                            </td>
                        )
                        }

                    </tr>
                </Table>
            </AbcTableCol>
        )
    }
}

export default class AbcTableLeft1Right2Row2 extends React.Component
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
                <AbcTableGrid>

                    {rowProducts&&rowProducts.map&&rowProducts.map((rowProduct, index) =>
                        <AbcTableRow lgObjects={rowProduct.lgObjects}
                                            smObjects={rowProduct.smObjects}/>
                    )}

                </AbcTableGrid>
            </AbcPanel>)
        return panel;
    }
}