import React,{ Component, PropTypes, Children } from 'react'
import AbcNavMain from './AbcNavMain'
export default class AbcMainPage extends Component {
    render() {
        const { children} = this.props;
        return (
            <div>
                <AbcNavMain></AbcNavMain>
                {this.props.children}
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
