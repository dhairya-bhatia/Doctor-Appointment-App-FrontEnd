import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import configStore from './redux/store'
import AppNavigator from './Navigation/AppNavigator'

function App() {
  return (
  <Provider store={configStore()}>
    <AppNavigator />
  </Provider>
  );
}

export default App;
