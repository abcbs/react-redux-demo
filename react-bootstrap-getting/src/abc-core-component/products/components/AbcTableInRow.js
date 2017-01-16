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

import {composeTableLargeCell,composeTableSmallCell,AbcTableRowDefault,AbcTable,
    AbcTableSmallCell,AbcTableSmallCellToolbar,AbcTableSmallCellWithToolbar,
    AbcListCol,AbcTableLargeTd,AbcTableSmallTd,AbcTableFrame,
    AbcTableLargeCell,AbcTableLargeCellToolbar,AbcTableLargeCellWithToolbar} from './AbcTableListGridFrame'

//每行数据UI
/**
 * 主，共计三列，一列大格子，两列小个子
 * -------------------
 * \        \   \    \
 * \        \   \    \
 * --------------------
 */
export class AbcTableRow extends AbcTableRowDefault{

    render() {
        const {lgObjects,smObjects,tableType,...others}=this.props;
        // const TableLargeCell=composeTableLargeCell()(AbcTableLargeCell);
        let TableLargeCell;
        switch (tableType){
            case 1:
            case 2:
                TableLargeCell=this.buildTableLargeCellWithToolbar(
                    {imageClassName:"image-1-1"});
                break;
            case 3:
                TableLargeCell=this.buildTableLargeCellToolbar({imageClassName:"image-1-1"});

                break;
            default:
                TableLargeCell=this.buildTableLargeCell({imageClassName:"image-1-1"});
        }
         let TableSmallCell=this.buildTableSmallCell();
        switch (tableType){
            case 1:
                TableSmallCell=this.buildTableSmallCellWithToolbar();
                break;
            case 2:
                TableSmallCell=this.buildTableSmallCellWithBadge({imageClassName:"image-fixed--by-left-cell"});
                break;
            case 3:
                TableSmallCell=this.buildTableSmallCellToolbar();

                break;
            default:
                TableSmallCell=this.buildTableSmallCell();
        }
        return (
            <AbcListCol>
                <AbcTableFrame>
                    <tr align="center">
                        {lgObjects&&lgObjects.map&&lgObjects.map((lgObject, index) =>
                            <AbcTableLargeTd>
                                <TableLargeCell lgObject={lgObject}
                                                key={index}/>
                            </AbcTableLargeTd>
                        )}
                        {smObjects&&smObjects.map&&smObjects.map((smObject, index) =>
                            <AbcTableSmallTd>
                                <TableSmallCell smObject={smObject}
                                                  key={index} />
                            </AbcTableSmallTd>
                        )
                        }

                    </tr>
                </AbcTableFrame>
            </AbcListCol>
        )
    }
}

/**
 * 主，共计三列，一列大格子，两列小个子
 * -------------------
 * \        \   \    \
 * \        \   \    \
 * --------------------
 */
export default class AbcTableLeft1Right2Row2 extends AbcTable
{
    static propTypes =
    {
        header : PropTypes.object,
        lgObjects: PropTypes.arrayOf(lgShape).isRequired,
        smObjects: PropTypes.arrayOf(smShape).isRequired,
        tableType:PropTypes.number
    };
    buildAbcTableGrid(){
        return AbcTableRow;
    }
}

//每行UI,大图中包括Toolbar，小图中为文字，左边大图
/**
 * 主，共计三列，一列大格子，两列小个子
 * -------------------
 * \        \   \    \
 * \        \   \    \
 * --------------------
 */
export class AbcRowLeftToolbarRightText extends AbcTableRowDefault{

    render() {
        const {lgObjects,smObjects,tableType,...others}=this.props;
        const  TableLargeCell=super.buildTableLargeCellToolbar({imageClassName:"image-1-1"});

        let TableSmallCell=super.buildTableSmallCell({imageClassName:"image-fixed--by-left-cell"});
        return (
            <AbcListCol>
                <AbcTableFrame>
                    <tr align="center">
                        {lgObjects&&lgObjects.map&&lgObjects.map((lgObject, index) =>
                            <AbcTableLargeTd>
                                <TableLargeCell lgObject={lgObject}
                                                key={index}/>
                            </AbcTableLargeTd>
                        )}
                        {smObjects&&smObjects.map&&smObjects.map((smObject, index) =>
                            <AbcTableSmallTd>
                                <TableSmallCell smObject={smObject}
                                                key={index} />
                            </AbcTableSmallTd>
                        )
                        }

                    </tr>
                </AbcTableFrame>
            </AbcListCol>
        )
    }
}

/**
/**
 * 主，共计三列，一列大格子，两列小个子
 * -------------------
 * \        \   \    \
 * \        \   \    \
 * --------------------
 */
export class AbcTableLeft1Right2Row2RightText extends AbcTableLeft1Right2Row2{

    buildAbcTableGrid(){
        return AbcRowLeftToolbarRightText;
    }
}