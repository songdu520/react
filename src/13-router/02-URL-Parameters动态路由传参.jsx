import React, { Component } from 'react';

import { Route, Link } from 'react-router-dom';

const Home = (props) => <div>home{ props.match.params.id }</div>
// class Home extends Component {
//   render() {
    // const obj = {
    //   a: {
    //     b: 3
    //   }
    // }
    // console.log(obj.a?.b);
    // 获取动态路由的参数
    //es2020可选链 :  ?.
    //检验对象是否存在，如果不存在会返回undefine，不会报错
//     console.log(this.props.match.params?.id)
//     return <div>home</div>
//   }
// }

class UrlParameters extends Component {
  render() {
    return (
      <>
        <Link to="/aaa">aaa</Link> | 
        <Link to="/bbb">bbb</Link> | 
        <Link to="/444">444</Link>
        {/* 首先在path加上"/:id" */}
        <Route path="/:id" component={ Home }></Route>
      </>
    );
  }
}

export default UrlParameters;