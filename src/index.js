import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import TodoList from './todolist/TodoList'
import AntdTodoList from "./redux/ToduList";
import TodoList2 from './react_redux/todolist'

import store from './react_redux/store'
import { Provider }  from 'react-redux'

const App = (
    <Provider store={store}>
        <TodoList2/>
    </Provider>
)

ReactDOM.render(
    App,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
