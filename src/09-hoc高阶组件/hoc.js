import React, { Component } from 'react';

const hoc = (Comp) => {
  return class extends Component {
    render () {
      console.log('hoc:', this)
      // return <Comp msg="hello" msg2={this.props.msg2}/>
      //接受调用父组件的所有      参数 {...this.props}
      return <Comp msg="hello" {...this.props}/>
    }
  }
}

export default hoc;