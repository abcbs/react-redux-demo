import React from 'react';
import AbcContainer from '../../abc-framework/ui/AbcContainer'
import AbcPage from '../../abc-framework/ui/AbcPage'
import {Label,Badge,ButtonToolbar,Button,Checkbox} from '../../abc-bootstrap'

import 'bootstrap/less/theme.less'
import 'bootstrap/less/bootstrap.less';
export default class HomePage extends React.Component {
    handleClick(e) {
        console.log("e,",e.target.value);
    }
    render() {
        var root=$("root");
        //label-primary-bg
        return (
            <AbcPage title="首页" router="home" subTitle="欢迎光临">
                    <AbcContainer>
                        <span style={{ position: 'absolute' ,display:'inline-block'}}>
                            <Checkbox onClick={this.handleClick.bind(this)}></Checkbox>
                            <input type="checkbox"/>
                            <input type="checkbox"/>
                            <input type="checkbox"/>
                            <Label bsStyle="abc" bsSize="bg">test</Label>
                            {"testtttttttttttttt"}
                            <span>
                             <Button type="button" bsStyle="default" style={{display:'inline'}}>
                             确定
                            </Button><Badge bsStyle="info" bsSize="abc">4</Badge>
                                </span>
                            <ButtonToolbar style={{ position: 'relative'}}>
                                Messages<Badge bsStyle="abc">17</Badge>
                                </ButtonToolbar>
                            </span>
                    </AbcContainer>

            </AbcPage>
        );
    }
}
