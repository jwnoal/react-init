import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker';

import './index.css';
// import App from './App';
import home from './container/home'
import antdemo from './container/demo/antmobile'
import reducers from './redux'

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
))

ReactDOM.render(
(<Provider store={store}>
  <BrowserRouter>
    <div>
      <Link to='/home'>1111111111111111111</Link>
      <br />
      <Link to='/antdemo'>222222222222222222</Link>
      <Route exact path='/home' component={home}></Route>
      <Route path='/antdemo' component={antdemo}></Route>
    </div>
  </BrowserRouter>
</Provider>),
 document.getElementById('root')
);
registerServiceWorker();
