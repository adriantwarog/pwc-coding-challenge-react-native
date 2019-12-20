import React, { Component } from 'react'
import { Provider } from 'mobx-react'

// Components
import NavigationViews from './NavigationViews'

// Store
import Store from '../store'

// Set store (but don't reset for hot reloading)
if(!window.store){ const store = window.store = new Store() }

// The provider of the mobx store to all components is set
export default App = () => 
    <Provider store={store}>
        <NavigationViews />
    </Provider>