import React,{ Component, PropTypes, Children } from 'react'
import classnames from 'classnames'
import '../../todomvc/css/index.css'
export default class AbcContainer extends Component {
       render() {
        const { children,isMovedTop,isContainer,...others} = this.props;
        return (
            <div {...others} className={
                    classnames({
                      'container':this.props.isContainer,
                       'marginPageTop':this.props.isMovedTop
                    })}
            >
                {Children.only(children)}
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
    isMovedTop:true,
    isContainer:true,
}

AbcContainer.childContextTypes = {
  
}
