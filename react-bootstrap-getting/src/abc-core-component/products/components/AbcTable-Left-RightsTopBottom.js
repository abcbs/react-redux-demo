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

import {composeTableLargeCell,composeTableSmallCell,AbcTableRowDefault,
    AbcTableSmallCell,AbcTableSmallCellToolbar,AbcTableSmallCellWithToolbar,AbcTable,
    AbcTableGrid,AbcListCol,AbcTableLargeLeftTd,AbcTableSmallTd,AbcTableFrame,
    AbcTableLargeCell,AbcTableLargeCellToolbar,AbcTableLargeCellWithToolbarBottom} from './AbcTableTopBottom'


//每行UI,大图中包括Toolbar，小图中为文字
/**
 * 主显示为左右结构，左边一个大格子，右边上面两个下面两个
 */
export class AbcTableLeft1RightsTop2Bottom2Row extends AbcTableRowDefault{

    render() {
        const {lgObjects,smObjects,tableType,...others}=this.props;
        const  TableLargeCell=super.buildTableLargeCell(
            {containerClassName:"abc-content-lg-h12",imageClassName:"image"});
        const  smObjectsTop= smObjects.slice(0,2);
        const  smObjectsBottom=smObjects.slice(2,smObjects.length);
        let TableSmallCell=super.buildTableSmallCell();
        return (
            <AbcListCol>
                <AbcTableFrame>
                    <tr align="center">
                        {lgObjects&&lgObjects.map&&lgObjects.map((lgObject, index) =>
                            <AbcTableLargeLeftTd>
                                <TableLargeCell lgObject={lgObject}
                                                key={index}/>
                            </AbcTableLargeLeftTd>
                        )}
                        {smObjectsTop&&smObjectsTop.map&&smObjectsTop.map((smObject, index) =>
                            <AbcTableSmallTd>
                                <TableSmallCell smObject={smObject}
                                                key={index} />
                            </AbcTableSmallTd>
                        )
                        }

                    </tr>
                    <tr>
                        {smObjectsBottom&&smObjectsBottom.map&&smObjectsBottom.map((smObject, index) =>
                            <AbcTableSmallTd>
                                <TableSmallCell smObject={smObject}
                                                key={index}/>
                            </AbcTableSmallTd>
                        )}
                    </tr>
                </AbcTableFrame>
            </AbcListCol>
        )
    }
}

export default class AbcTableLeft1RightsTop2Bottom2 extends AbcTable{
    buildAbcTableGrid(){
        return AbcTableLeft1RightsTop2Bottom2Row;
    }
}

export class AbcTableLeft1RightsTop1Bottom1Row extends AbcTableRowDefault{

    render() {
        const {lgObjects,smObjects,tableType,...others}=this.props;
        const TableLargeCell=composeTableLargeCell(
            {containerClassName:"abc-content-lg-h",imageClassName:"image"})(AbcTableLargeCellWithToolbarBottom);
        const  smObjectsTop= smObjects.slice(0,1);
        const  smObjectsBottom=smObjects.slice(1,smObjects.length);
        let TableSmallCell=super.buildTableSmallCell( {imageClassName:"image-width-zoom2"});
        return (
            <AbcListCol>
                <AbcTableFrame>
                    <tr align="center">
                        {lgObjects&&lgObjects.map&&lgObjects.map((lgObject, index) =>
                            <AbcTableLargeLeftTd>
                                <TableLargeCell lgObject={lgObject}
                                                key={index}/>
                            </AbcTableLargeLeftTd>
                        )}
                        {smObjectsTop&&smObjectsTop.map&&smObjectsTop.map((smObject, index) =>
                            <AbcTableSmallTd className="td-1-2-r">
                                <TableSmallCell smObject={smObject}
                                                key={index} />
                            </AbcTableSmallTd>
                        )
                        }

                    </tr>
                    <tr>
                        {smObjectsBottom&&smObjectsBottom.map&&smObjectsBottom.map((smObject, index) =>
                            <AbcTableSmallTd className="td-1-2-r">
                                <TableSmallCell smObject={smObject}
                                                key={index}/>
                            </AbcTableSmallTd>
                        )}
                    </tr>
                </AbcTableFrame>
            </AbcListCol>
        )
    }
}
export class AbcTableLeft1RightsTop1Bottom1 extends AbcTable{
    buildAbcTableGrid(){
        return AbcTableLeft1RightsTop1Bottom1Row;
    }
}
