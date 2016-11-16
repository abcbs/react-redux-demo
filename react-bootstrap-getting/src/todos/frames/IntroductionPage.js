import React from 'react';
import AbcContainer from '../framework/ui/AbcContainer'
import AbcPage from '../framework/ui/AbcPage'

const IntroductionPage = React.createClass({
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

export default IntroductionPage;
