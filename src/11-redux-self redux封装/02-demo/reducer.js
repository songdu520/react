//reducer
// const state = {
//   abc: 'sss',
//   count: 3
// }

// 纯函数
// 入参相同，返回值也相同（.函数的结果只依赖它传入的参数）
// 入参不能改变
const changeState = (state, action) => {
  action = action || {type: ''};
  switch(action.type) {
    case 'increment':
      // state.count++;
      return {
        ...state,
        count: state.count + 1
      }
      // break;
    case 'decrement':
      return {
        ...state,
        count: state.count - 1
      }
    default: 
      return state
  }
}

export {
  changeState
}