import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import Search from "../Search/Search";
import TodoList from "../TodoList/TodoList";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import ItemAddForm from "../ItemAddForm/ItemAddForm";

class App extends Component {
  maxId = 100;

  state = {
    todos: [

    ],
    keyword: '',
    filter: 'all'
  };

  onDeleteHandler = (id) => {
    this.setState(({ todos }) => {
      const newArray = todos.filter((el) => el.id !== id);
      return {
        todos: newArray,
      };
    });
  };

  onAddHandler = (text) => {
    this.setState(({ todos }) => {
      const currentState = [...todos];

      let newObj = { label: text, id: this.maxId++ };

      currentState.push(newObj);

      return {
        todos: currentState,
      };
    });
  };

  onToggleProperty(arr, id, propName) {
    const currentState = [...arr];
    const idx = currentState.findIndex((el) => el.id === id);
    const oldItem = currentState[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};
    currentState.splice(idx, 1, newItem);
    return currentState;

  }


  onToggleImportant = (id) => {
    this.setState(({ todos }) => {
      return {
        todos: this.onToggleProperty(todos, id, 'important'),
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todos }) => {
      return {
        todos: this.onToggleProperty(todos, id, 'done')
      };
    });
  };

  search = (data, keyword) => {
    if(keyword.length === 0) {
      return data;
    }
    return data.filter((el) => {
      return el.label.toLowerCase().includes(keyword.toLowerCase());
    })
  }

  onSearchChangeHandler = (text) => {
    this.setState({
      keyword: text
    })
  }

  filter = (data, filter) => {
      switch(filter) {
        case('all'):
          return data;
  
        case('active'):
          return data.filter((el) => !el.done);
          
        case('done'):
          return data.filter((el) => el.done);
  
        default:
          return data;  
        }  
  }

  onFilterChange = (filter) => {
    this.setState({
      filter: filter
    })
  }


  

  render() {
    const {todos, keyword, filter} = this.state;
    const visibleItems = this.filter(this.search(todos, keyword), filter);
    const doneCount = this.state.todos.filter((el) => el.done).length;
    const todoCount = this.state.todos.length - doneCount;

    return (
      <div className="App">
        <Header 
          done={doneCount}
          todo={todoCount}
        />
        <div className="TopPanel d-flex">
          <Search 
           onSearchChange={this.onSearchChangeHandler}
           value={keyword}
          />
          <ItemStatusFilter 
            filter={filter}
            onFilter={this.onFilterChange}
          />
        </div>
        <TodoList
          todoData={visibleItems}
          onDeleteList={this.onDeleteHandler}
          onImportant={this.onToggleImportant}
          onDone={this.onToggleDone}
        />
        <ItemAddForm 
          onAdd={this.onAddHandler}
        />
      </div>
    );
  }
}
export default App;
