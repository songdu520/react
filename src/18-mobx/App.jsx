import React from 'react';

// 引入store数据
import { 
  inject,//关联stroe
  observer // 用于响应式的改变//要在inject里面使用
} from 'mobx-react';

@inject('store')//必须传个“store”字符串做参数，
@observer
class App extends React.Component {

  handleClick = () => {
    this.props.store.count.changeCount()
  }

  render() {
    const {count, doubleCount, num} = this.props.store.count;
    return (
      <div>
        <h1>mobx</h1>
        <p>{ count }</p>
        <p>{ doubleCount }</p>
        <p>{ num }</p>
        <button onClick={ this.handleClick }>btn</button>
      </div>
    );
  }
}

export default App;

// @inject('store')
// @observer
// const App = (props) => {
//   const {count, doubleCount, num} = props.store.count;

//   const handleClick = () => {
//     props.store.count.changeCount()
//   }

//   return (
//     <div>
//       <h1>mobx</h1>
//       <p>{ count }</p>
//       <p>{ doubleCount }</p>
//       <p>{ num }</p>
//       <button onClick={ handleClick }>btn</button>
//     </div>
//   )
// }

// export default inject('store')(observer(App));