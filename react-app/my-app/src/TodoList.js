/**
 * Created by angelqiqi on 2020/4/8.
 */
import React, { Component , Fragment} from 'react';

class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputValue:'',
      list:['学习数学','学习react']
    }
  }
  render(){
    return(
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputClick.bind(this)} />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {this.state.list.map((item,index) =>{
            return <li key={index} onClick={this.handleItemDelete.bind(this,index)}>{item}</li>
          })}
        </ul>
      </Fragment>
    )
  }
  handleInputClick(e){
    this.setState({
      inputValue:e.target.value
    })
  }
  handleBtnClick(){
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    })
  }
  handleItemDelete(index){
    const list = [...this.state.list];
    list.splice(index,1);

    this.setState({
      list:list
    })
  }
}

export default TodoList