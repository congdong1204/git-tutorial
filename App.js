import React from 'react'
import {
  View,
  Text
} from 'react-native'
import { Provider } from 'react-redux'
import store from './store'
import HomeScreen from './screens/home/HomeScreen'

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  )
}

//pham cong dong

export default App