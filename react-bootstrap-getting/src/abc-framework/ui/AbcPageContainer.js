import React,{ Component, createElement ,PropTypes} from 'react'
import hoistStatics from 'hoist-non-react-statics'
//
import AbcContainer from  './AbcContainer'
import AbcPage from './AbcPage'
import {Col} from '../../abc-bootstrap'
import AbcNestLeftPage from './AbcNestLeftPage'
const defualt_style={ position: ' relative'};


function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

export default function container(options) {
     const _isMovedTop=options&&options.isMovedTop||true, _isContainer=options&&options.isContainer||true,
        _style =options&&options.style||defualt_style,
        _title=options&&options.title, _subTitle=options&&options.subTitle, _router=options&&options.router;

    return function wrapWithConnect(WrappedComponent) {
        const connectDisplayName = `Container(${getDisplayName(WrappedComponent)})`
        // @international()
        class Container extends Component {
            render() {
                const {translate,style,isMovedTop,isContainer,children,...other}=this.props;
                return (
                    <AbcPage title={translate&&translate(_title)}
                             router={_router}
                             subTitle={translate&&translate(_subTitle)} >
                        
                        <AbcContainer isMovedTop={isMovedTop||_isMovedTop}
                                      isContainer={isContainer||_isContainer} >
                            {
                                //xs={5} sm={6} md={7} lg={4}
                                //xsHidden ={true} smHidden ={true} mdHidden ={true}
                            }
                            <Col xs={0}  sm={0}  md={2}   lg={2} xsHidden ={true} smHidden ={true}
                                 style={{paddingLeft:"1px",paddingRight:"1px"}}
                                >
                                <AbcNestLeftPage />
                            </Col>
                            <Col xs={12}  sm={12} md={10} lg={9}
                                 style={{paddingLeft:"1px",paddingRight:"1px"}}>
                                <span  style={{marginRight:"2px" ,display:"block-inline"}}>
                                    <WrappedComponent {...this.props} />
                                </span>
                            </Col>
                            {
                            // <div style={style||_style}>
                            //      <WrappedComponent {...this.props} />
                            // </div>
                            }
                        </AbcContainer>
                     </AbcPage>
                )

            }
        }//
        Container.displayName = connectDisplayName
        Container.WrappedComponent = WrappedComponent
        Container.contextTypes = {
            style: PropTypes.object
        }
        Container.propTypes = {
            style: PropTypes.object
        }
        return hoistStatics(Container, WrappedComponent);
    }

}