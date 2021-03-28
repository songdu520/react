import React, { Component } from 'react';

// 引入classNames,用于根据不同的条件添加不同的样式
// import classNames from 'classnames/bind';

// import styles from './02-style.css';

// let cx = classNames.bind(styles);

const styleObj = {
  fontSize: '100px'
}


class App extends Component {
  render() {
    // let className = cx({
    //   // key是类名，value是变量或者表达式
    //   font: 1 < 2
    // });
    return (
      // <div style={{ color: 'green', fontSize: '50px' }}>app2</div>
      // <div className={ className }>app2</div>
      <div style={ 5 < 2 ? styleObj : null }>app2</div>
    );
  }
}

export default App;