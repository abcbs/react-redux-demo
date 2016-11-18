import React from 'react';
import { render } from 'react-dom'
import AbcContainer from '../todos/framework/ui/AbcContainer'
import AbcPage from '../todos/framework/ui/AbcPage'
import {Label,Badge,ButtonToolbar,Button,Checkbox} from '../todos/abc-bootstrap'

import 'bootstrap/less/theme.less'
import 'bootstrap/less/bootstrap.less';
class Home extends React.Component {
    handleClick(e) {
        console.log("e,",e.target.value);
    }
    render() {
        var root=$("root");
        //label-primary-bg
        return (
            <AbcPage title="首页" router="home" subTitle="欢迎光临">
                <AbcContainer>
                    <div>
                        <Checkbox onClick={this.handleClick.bind(this)}></Checkbox>
                        <Label bsStyle="abc" bsSize="bg">test</Label>
                        <ButtonToolbar style={{ position: 'relative' ,display:'inline-block'}}>
                            <Button type="button" bsStyle="default" style={{ position: 'relative'}}>
                                确定
                            </Button><Badge bsStyle="info" bsSize="abc">4</Badge>
                        </ButtonToolbar>
                        <ButtonToolbar style={{ position: 'relative'}}>
                            Messages<Badge bsStyle="abc">17</Badge>
                        </ButtonToolbar>
                    </div>
                </AbcContainer>

            </AbcPage>
        );
    }
}

// render(
//     <Home/>,
//     document.getElementById('home'));
