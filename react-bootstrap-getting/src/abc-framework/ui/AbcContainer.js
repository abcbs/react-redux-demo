import React,{ Component, PropTypes, Children } from 'react'
import classnames from 'classnames';
import map  from 'lodash/map';
import AbcNavMain from './AbcNavMain'
// Object.map=Object.map||map;
export default class AbcContainer extends Component {
       render() {
        const { children,isMovedTop,isContainer,...others} = this.props;
        // const children.map=children.map||map;
        return (
            <div {...others} style={{zIndex:'1060', marginLeft:"0px",
             paddingLeft:"1px",paddingLeft:"1px"}} className={
                    classnames({
                      'container':this.props.isContainer,
                       'marginPageTop':this.props.isMovedTop
                    })}
            >
                  {
                    //Children.only(children)
                    children
                }
            </div>
        )
    }
}

AbcContainer.propTypes = {
    children: PropTypes.element.isRequired,
    isMovedTop:PropTypes.bool.isRequired,
    isContainer:PropTypes.bool.isRequired,
}

AbcContainer.defaultProps={
    isMovedTop:false,
    isContainer:true,
}

AbcContainer.childContextTypes = {
  
}
