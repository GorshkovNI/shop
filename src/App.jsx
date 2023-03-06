import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import { HeaderContainer } from './Components/Header/HeaderContaienr';
import { Body } from './module/Body/Body';
import { Cart } from './module/Cart/Cart';
import { store } from './store';
import { Bookmarks } from './Pages/Bookmarks/Bookmarks';
import cn from 'classnames';

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const handleCartVisible = () => {
    setCartVisible(!cartVisible);
  };

  useEffect(() => {
    cartVisible
      ? document.body.classList.add('hidden')
      : document.body.classList.remove('hidden');
  }, [cartVisible]);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='App'>
          {cartVisible && <Cart onCartVisible={handleCartVisible} />}
          <div className={cn('wrapper', cartVisible ? 'hidden' : '')}>
            <HeaderContainer onCartVisible={handleCartVisible} />
            <Routes>
              <Route path='/' element={<Body />} />
              <Route path='/bookmarks' element={<Bookmarks />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
