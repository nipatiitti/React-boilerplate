import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './Config'

import App from './Routes'

const MainComponent = (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
)

ReactDOM.render(<MainComponent />, document.getElementById('app'))

module.hot.accept()
