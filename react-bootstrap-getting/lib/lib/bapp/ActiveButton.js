'use strict';

define(['react', 'react-dom', 'react-bootstrap/lib/ButtonToolbar', 'react-bootstrap/lib/Button'], function (React, ReactDom, ButtonToolbar, Button) {
    var buttonsInstance = React.createElement(
        ButtonToolbar,
        null,
        React.createElement(
            Button,
            { bsStyle: 'primary', bsSize: 'large', active: true },
            'Primary button'
        ),
        React.createElement(
            Button,
            { bsSize: 'large', active: true },
            'Button'
        )
    );

    ReactDom.render(buttonsInstance, document.getElementById('appButton'));
});