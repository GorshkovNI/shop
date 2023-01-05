import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { Header } from './Components/Header/Header';
import { Body } from './module/Body/Body';
import { Search } from './module/Search/Search';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <Search />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
