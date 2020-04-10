/**
 * Created by angelqiqi on 2020/4/8.
 */
import React, {Component, Fragment} from 'react';
import './style.css';
import TodoItem from './TodoItem'

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: ['学习数学', '学习react']
    }
  }

  render() {
    return (
      <Fragment>
        {/*大写开头是组件*/}
        <div>
          <label htmlFor="inserArea">输入内容</label>
          <input className="input" value={this.state.inputValue} onChange={this.handleInputClick.bind(this)}/>
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <div>
                {/*父传子：子组件通过this.props接收*/}
                <TodoItem content={item} index={index} deleteItem={this.handleItemDelete.bind(this)} />
                
                {/*<li key={index}
                       onClick={this.handleItemDelete.bind(this,index)}
                       dangerouslySetInnerHTML = {{__html:item}}
                 ></li>*/}
              </div>
            )
          })}
        </ul>
      </Fragment>
    )
  }

  handleInputClick(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleItemDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);

    this.setState({
      list: list
    })
  }
}

export default TodoList