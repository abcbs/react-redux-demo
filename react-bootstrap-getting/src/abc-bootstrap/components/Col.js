import classNames from 'classnames';
import React from 'react';
import elementType from 'react-prop-types/lib/elementType';

import { bsClass, prefix, splitBsProps } from '../utils/bootstrapUtils';
import { DEVICE_SIZES } from '../utils/StyleConfig';

const propTypes = {
  componentClass: elementType,

  xp: React.PropTypes.number,
  
  xs: React.PropTypes.number,

  sm: React.PropTypes.number,

  md: React.PropTypes.number,

  lg: React.PropTypes.number,

  xsHidden: React.PropTypes.bool,

  smHidden: React.PropTypes.bool,

  mdHidden: React.PropTypes.bool,

  lgHidden: React.PropTypes.bool,

  xsOffset: React.PropTypes.number,

  smOffset: React.PropTypes.number,

  mdOffset: React.PropTypes.number,

  lgOffset: React.PropTypes.number,

  xsPush: React.PropTypes.number,

  smPush: React.PropTypes.number,

  mdPush: React.PropTypes.number,

  lgPush: React.PropTypes.number,

  xsPull: React.PropTypes.number,

  smPull: React.PropTypes.number,

  mdPull: React.PropTypes.number,

  lgPull: React.PropTypes.number,
};

const defaultProps = {
  componentClass: 'div',
};

class Col extends React.Component {
  render() {
    const { componentClass: Component, className, ...props } = this.props;
    const [bsProps, elementProps] = splitBsProps(props);

    const classes = [];

    DEVICE_SIZES.forEach(size => {
      function popProp(propSuffix, modifier) {
        const propName = `${size}${propSuffix}`;
        const propValue = elementProps[propName];

        if (propValue != null) {
          classes.push(prefix(bsProps, `${size}${modifier}-${propValue}`));
        }

        delete elementProps[propName];
      }

      popProp('', '');
      popProp('Offset', '-offset');
      popProp('Push', '-push');
      popProp('Pull', '-pull');

      const hiddenPropName = `${size}Hidden`;
      if (elementProps[hiddenPropName]) {
        classes.push(`hidden-${size}`);
      }
      delete elementProps[hiddenPropName];
    });

    console.log("Col=========================> ,",this.props);
    return (
      <Component
        {...elementProps}
        className={classNames(className, classes)}
      />
    );
  }
}

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;

export default bsClass('col', Col);
