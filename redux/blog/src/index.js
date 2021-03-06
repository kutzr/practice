import React from 'react'
import ReactDOM from 'react-dom'
import PostsIndex from './components/posts'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import { BrowserRouter, Route } from 'react-router-dom'
import promise from 'redux-promise'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path='/' component={PostsIndex} />
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('root'))
registerServiceWorker()
