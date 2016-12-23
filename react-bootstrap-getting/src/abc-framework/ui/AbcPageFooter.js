import React from 'react';
import {Navbar} from '../../abc-bootstrap'

let idx=0;
const PageFooter = React.createClass({

    handleFocus:function(){

        if(((++idx)%2)===1){
           this.setState({visible: "hidden"});
           this.state.visible="hidden";
            this.state.display="none";
        }else{
          this.setState({visible: "visible"});
          this.state.visible="visible";
         }
        // console.log("this.================================,idx==>",idx);
    },
    getInitialState: function() {
        return {visible:"hidden"};
    },

    render() {
        const v=this.state.visible;
        return (
            <div  onMouseMove ={this.handleFocus}
                  onTouchStart={this.handleFocus}>
            <Navbar fixedBottom className="container container-desktop container-lg"
                   
            >
            <p  style={{visibility:this.state.visible}} >ABC right ABC right</p>
            </Navbar>
            </div>
        );
    }
});

export default PageFooter;
