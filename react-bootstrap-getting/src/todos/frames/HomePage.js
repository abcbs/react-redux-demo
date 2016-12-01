import React from 'react';
import AbcContainer from '../../abc-framework/ui/AbcContainer'
import AbcPage from '../../abc-framework/ui/AbcPage'
import {Label,Badge,ButtonToolbar,Button,Checkbox} from '../../abc-bootstrap'

import 'bootstrap/less/theme.less'
import 'bootstrap/less/bootstrap.less';
import { defineMessages }              from 'react-intl'

import international from '../../abc-framework/international/internationalize'

const messages = defineMessages
({
    title:
    {
        id             : 'home.title',
        description    : '首页配置',
        defaultMessage : '首页'
    },
    subTitle:
        {
            id             : 'home.subTitle',
            description    : '首页子标题',
            defaultMessage : '欢迎光临'
     }
}
)

@international()
export default class HomePage extends React.Component {
    handleClick(e) {
        console.log("e,",e.target.value);
    }
    render() {
        //var root=$&&$("root");
        //label-primary-bg
        const { translate } = this.props;
        const title=translate(messages.title);
        return (
            <AbcPage title={translate(messages.title)}
                     router="home"
                     subTitle={translate(messages.subTitle)} >
                    <AbcContainer>
                        <span style={{ position: 'absolute' ,display:'inline-block'}}>
                            <Checkbox onClick={this.handleClick.bind(this)}></Checkbox>
                            <input type="checkbox"/>
                            <input type="checkbox"/>
                            <input type="checkbox"/>
                            <Label bsStyle="abc" bsSize="bg">test</Label>
                            {
                                // this.props.translate("home.title")
                            }
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
