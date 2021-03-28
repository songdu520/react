import React, { Component } from 'react';

import { Switch, Route, Redirect, useParams, Link, useRouteMatch } from 'react-router-dom';

const PEEPS = [
  { id: 0, name: "Michelle", friends: [1, 2, 3] },
  { id: 1, name: "Sean", friends: [0, 3] },
  { id: 2, name: "Kim", friends: [0, 1, 3] },
  { id: 3, name: "David", friends: [1, 2] }
];
//es6 新增的数组方法
// find()函数用来查找目标元素，找到就返回该元素，找不到返回undefined。
// findIndex()函数也是查找目标元素，找到就返回元素的位置，找不到就返回-1。
const find = (id) => {
  return PEEPS.find(item => {
    return item.id === +id
  })
}

const Person = () => {
  // 用来获取当前路径
  let { url } = useRouteMatch();
  //useparams 用来获取参数
  const params = useParams();
  // console.log(params.id)
  return (
    <>
      <h3>{ find(params.id).name }'s Friends</h3>

      <ul>
        {
          find(params.id).friends.map((item, index) => {
            return (
              <li key={index}>
                <Link to={`${url}/${item}`}>{find(item).name}</Link>
              </li>
            )
          })
        }
      </ul>

      <Switch>
        <Route path={`${url}/:id`}>
          <Person />
        </Route>
      </Switch>
    </>
  )
}

class Recursive extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/:id">
            <Person />
          </Route>
          <Route path="/">
            <Redirect to="/0" />
          </Route>
        </Switch>
      </>
    );
  }
}

export default Recursive;