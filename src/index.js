// React Imports
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { combinedReducers, initialState } from './reducers'
// Components
import App from './components/App/App'
// CSS
import './index.css'

const store = createStore(combinedReducers, initialState)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()
