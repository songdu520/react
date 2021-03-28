//可以做异步请求的文件
import { GET_DATA } from './actionTypes.js';

// 获取数据, (如果是异步，一般分成两步)
const getDataAction = (list) => {
  return {
    type: GET_DATA,
    list
  }
}
const getDataAsyncAction = () => {
  return (dispatch) => {
    // 写成函数就是为了做异步操作
    //由于dispatch里必须是扁平化的对象，这边的函数传进去就会报错所以我们引入createStore(reducer, applyMiddleware(thunk))————详情见store/index.js文件
    fetch('https://www.fastmock.site/mock/f6da2d51373e2d56be34e0119e611452/redux/api/list')
      .then(response => response.json())
      .then(res => {
        dispatch(getDataAction(res.list))
      })
  }
}

// 添加数据
const pushDataAction = (task) => {
  return {
    type: 'PUSH_DATA',
    task: task
  }
}

// 删除数据
const delateDataAction = (index) => {
  return {
    type: 'DELETE_DATA',
    index
  }
}

export {
  getDataAction,
  getDataAsyncAction,
  pushDataAction,
  delateDataAction
}