import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';
import './sass/example.scss';

class Index extends Component {
  render() {
    return (
      <div className="example-list">
        <h3>React IScroll 例子</h3>
        <ol>
          <li>
            <a href="./simple.html" target="_blank">入门例子</a>
          </li>
          <li>
            <a href="./paging.html" target="_blank">分页加载与刷新</a>
          </li>
        </ol>
      </div>
    );
  }
}

render(<Index/>, document.getElementById('layout'));
