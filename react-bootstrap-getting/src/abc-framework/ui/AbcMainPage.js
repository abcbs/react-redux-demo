import React,{ Component, PropTypes, Children } from 'react'
import {Row,Col} from '../../abc-bootstrap'
import AbcNavMain from './AbcNavMain'
import AbcLGRightPage from './AbcLGRightPage'
import AbcLGLeftPage from './AbcLGLeftPage'
export default class AbcMainPage extends Component {
    render() {
        const { children} = this.props;
        return (
         <div style={{overflowX: "hidden"}}>
             <Col xs={0} sm={0} md={2} lg={2}
                  xsHidden ={true} smHidden ={true} mdHidden ={true}
                  style={{paddingLeft:"1px",paddingRight:"1px"}}
                    >
                 <AbcLGLeftPage />
             </Col>
             <Col xs={12} sm={12} md={10} lg={9}>
                 <AbcNavMain />
                 {this.props.children}
             </Col>
             <Col xs={0} sm={0}  lg={1} xsHidden ={true} smHidden ={true} mdHidden ={true}
                  style={{paddingLeft:"1px",paddingRight:"1px"}}>
                 <AbcLGRightPage />
             </Col>
         </div>
        )
    }
}

AbcMainPage.propTypes = {
    children: PropTypes.element.isRequired,
}

AbcMainPage.defaultProps={

}

AbcMainPage.childContextTypes = {

}
