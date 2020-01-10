import React from 'react'
import ReactDOM from 'react-dom'
import App from './container/App'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistor} from './store/configureStore'

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);