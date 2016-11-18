import React from 'react';
import { render } from 'react-dom'
import AbcContainer from '../todos/framework/ui/AbcContainer'
import AbcPage from '../todos/framework/ui/AbcPage'

const Introduct = React.createClass({
    render() {
        return (
            <AbcPage title="展示互动" subTitle="欢迎光临">
                <AbcContainer>
                    <p>
                        Hello,商品介绍
                    </p>
                </AbcContainer>
            </AbcPage>
        );
    }
});
//
// render(
//     <Introduct/>,
//     document.getElementById('introduct'));
