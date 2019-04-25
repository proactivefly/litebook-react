import React, {Component} from 'react';
//react -redux store提供者
import {Provider} from 'react-redux';

import {BrowserRouter, Route} from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header/>
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
            {/*id为参数 match参数里*/}
            <Route path='/detail/:id' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
