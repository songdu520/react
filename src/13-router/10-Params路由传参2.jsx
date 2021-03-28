import React, { Component } from 'react';
//如何判断取到的是一个空对象 解：把空对象转成字符串比较
import { 
  Route,
  Link,
  Switch,
  // useHistory
  useLocation
} from 'react-router-dom';

// Hooks是给函数组件用的，使函数组件能够拥有类组件的功能
// Hooks必须写在函数组件的顶层
// useHistory让本身没有路由信息的组件拿到路由信息
//useLocation 可以拿到导航栏信息，

const Home = () => { 
  // console.log(props)
  // const history = useHistory();
  // console.log(history);
  const { state: { num } } = useLocation()

  return <div>home { num }</div>
};

const About = (props) => {
  // console.log(props)
  //路由props里的属性：history：可获取历史路由信息；location:地址栏信息；
  //mathch:匹配 （这里可以取到传的参数）
  return <div>about { props.match.params.num }</div>
};

const Mine = () => {
  const {search} = useLocation()
  // '?name=zhangsan&age=25'
  // new URLSearchParams URL字符串转对象方法
  const newSearch = new URLSearchParams(search);
  const name = newSearch.get('name')
  return <div>mine - {name}</div>
};

class PreventTransition extends Component {
  render() {
    return (
      <>
        
        <ul>
          {/* 传参的3种写法 */}
          <li><Link to={{
            pathname: '/home',
            search: '?name=zhangsan&age=25',
            hash: '#ccc',
            state: { num: 50 }
          }}>home</Link></li>
          <li><Link to="/about/20">about</Link></li>
          <li><Link to="/mine?name=zhangsan&age=25">mine</Link></li>
        </ul>

        <hr />

        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about/:num" component={About}></Route>
          <Route path="/mine" component={Mine}></Route>
        </Switch>
      </>
    );
  }
}

export default PreventTransition;