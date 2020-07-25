import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './Config'
import { ThemeProvider } from 'styled-components'

import App from './Routes'

const theme = {
    colors: {
        main: '#e8e8e8',
        background: '#423c5c',
        highlight: 'white',
    },
}

const MainComponent = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </PersistGate>
    </Provider>
)

ReactDOM.render(<MainComponent />, document.getElementById('app'))

module.hot.accept()
