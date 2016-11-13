import React from 'react';
import AbcContainer from './AbcContainer'
import AbcPage from './AbcPage'
import Label from '../abc-bootstrap/components/Label'
// import $ from "jquery"
export default class HomePage extends React.Component {
    render() {
        var root=$("root");
        return (
            <AbcPage title="首页" router="home" subTitle="欢迎光临">
                    <AbcContainer>
                     <Label bsStyle="warning" bsSize="bg" bsClass="abc-label"> Home
                        Beijing，主页<p>testest</p></Label>
                    </AbcContainer>
            </AbcPage>
        );
    }
}
