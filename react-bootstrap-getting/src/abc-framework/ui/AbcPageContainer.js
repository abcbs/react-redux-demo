import React,{ Component, createElement ,PropTypes} from 'react'
import hoistStatics from 'hoist-non-react-statics'
//
import AbcContainer from  './AbcContainer'
import AbcPage from './AbcPage'
const defualt_style={ position: 'absolute' ,display:'inline-block'};


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
                            <span style={style||_style}>
                                <WrappedComponent {...this.props} />

                                </span>
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