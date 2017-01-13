/**
 * 列表显示方式，上面两个大图，下面三十个小图
 */

import React, { PropTypes } from 'react'
import classNames           from 'classnames'
import hoistStatics from 'hoist-non-react-statics'
import {Modal,Glyphicon,Grid,Row,Col,Thumbnail,
    Image,Button,Media,Checkbox,ButtonToolbar,FormControl,Table} from '../../../abc-bootstrap'

import AbcPanel from '../../../abc-ui/AbcPanel'
import lgShape from './lg-shape';
import smShape from './sm-shape';
import AbcLabelLimit, {lgLimit} from './ui-limit'

export class AbcTableLargeCell extends React.Component{

    static propTypes =
    {
        lgObject: lgShape.isRequired,
        containerClass:PropTypes.string,
        contentClass:PropTypes.string,
        imageClass:PropTypes.string
    };

    static defaultProps =
    {
        containerClass:"abc-content-lg-top",
        contentClass:"abc-content",
        imageClass:"image-top"
    };

    render() {
        const {lgObject,containerClass,contentClass,imageClass,...others}=this.props;
        return (
            <div className={containerClass}>
                <div className={contentClass}>
                    <h5><AbcLabelLimit contentText={lgObject.title} limit={lgLimit.title} /></h5>
                    <p>{lgObject.description}</p>
                </div>
                <Image
                    className={imageClass}
                    src={lgObject.portrait}>
                </Image>
            </div>
        )
    }
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

export  function composeTableLargeCell() {

    return function wrapWithConnect(WrappedComponent) {
        const connectDisplayName = `Container(${getDisplayName(WrappedComponent)})`;
        class Container extends React.Component {
            static propTypes =
            {
                lgObject: lgShape.isRequired,
                containerClass:PropTypes.string,
                contentClass:PropTypes.string,
                imageClass:PropTypes.string
            };

            static defaultProps =
            {
                containerClass:"abc-content-lg-top",
                contentClass:"abc-content",
                imageClass:"image-top"
            };
            render() {
                const {lgObject,containerClass,contentClass,imageClass,...others}=this.props;
                return (
                    <div  className={containerClass}>
                        <WrappedComponent {...this.props} />
                    </div>
                )

            }
        }//
        Container.displayName = connectDisplayName;
        Container.WrappedComponent = WrappedComponent;

        return hoistStatics(Container, WrappedComponent);
    }
}

export class AbcTableSmallCell extends React.Component{

    static propTypes =
    {
        smObject: lgShape.isRequired,
        containerClass:PropTypes.string,
        contentClass:PropTypes.string,
        imageClass:PropTypes.string
    };
    static defaultProps =
    {
        containerClass:"abc-content-sm",
        contentClass:"abc-content",
        imageClass:"image"
    }
    render() {
        const {smObject,containerClass,contentClass,imageClass,...others}=this.props;
        return (
            <div className={containerClass}>
                <div className={contentClass}>
                    <div>
                        <h5>{smObject.title}</h5>
                        <p>{smObject.description}</p>
                    </div>
                </div>
                <Image
                    src={smObject.portrait}
                    className={imageClass}
                    alt={smObject.portraitAlt}>
                </Image>
            </div>
        )
    }
}

export class AbcTableGrid extends React.Component{

    static propTypes =
    {
        className: PropTypes.string.isRequired
    };

    static defaultProps =
    {
        className:"container-list-abc"
    };

    render() {
        const {className,children,...others}=this.props;
        return (
            <Grid className={className}>{
                children
            }
            </Grid>
        )
    }
}

export class AbcTableLargeTd extends React.Component{

    static propTypes =
    {
        className: PropTypes.string.isRequired,
        colSpan: PropTypes.string.isRequired
    };

    static defaultProps =
    {
        className:"td-1-2",
        colSpan:"2"
    };

    render() {
        const {className,colSpan,children,...others}=this.props;
        return (
            <td className={className} colSpan={colSpan}>{
                children
            }
            </td>
        )
    }
}

export class AbcTableCol extends React.Component{

    static propTypes =
    {
        xs: PropTypes.number.isRequired,
        xp: PropTypes.number.isRequired,
        sm: PropTypes.number.isRequired,
        md: PropTypes.number.isRequired,
        lg: PropTypes.number.isRequired

    };
    //xs={12} xp={6} sm={6} md={6}  lg={4}
    static defaultProps =
    {
        xs: 12,
        xp: 6,
        sm: 6,
        md: 6,
        lg: 4
    };

    render() {
        const {xs,xp,sm,md,lg,children,...others}=this.props;
        return (
            <Col xs={xs} xp={xp} sm={sm} md={md} lg={lg}>{
                children
            }
            </Col>
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
                      </tr>
                </Table>
                <Table className="abc-table-nobuttom"
                       cellspacing="1px" cellPadding="0" style={{marginTop:"-22px"}}>
                    <tr>
                        {smObjects&&smObjects.map&&smObjects.map((smObject, index) =>
                            <td className="td-1-2-b">
                                <AbcTableSmallCell smObject={smObject}
                                                  key={index}/>
                            </td>
                        )}
                    </tr>
                </Table>
            </AbcTableCol>
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
            <AbcTableGrid>
                {rowProducts&&rowProducts.map&&rowProducts.map((rowProduct, index) =>
                <AbcTableBottom3Row lgObjects={rowProduct.lgObjects}
                                    smObjects={rowProduct.smObjects}/>
                )}
            </AbcTableGrid>
        </AbcPanel>)
        return panel;
    }
}