import React, { useState } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { Header } from './Components/Header/Header';
import { Body } from './module/Body/Body';
import { Cart } from './module/Cart/Cart';
import { Search } from './module/Search/Search';
import { store } from './store';

function App() {
  const [cartVisible, setCartVisible] = useState(true);

  const handleCartVisible = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <Provider store={store}>
      <div className='App'>
        {cartVisible && <Cart />}
        <div className='wrapper'>
          <Header onCartVisible={handleCartVisible} />
          <Search />
          <Body />
        </div>
      </div>
    </Provider>
  );
}

export default App;
