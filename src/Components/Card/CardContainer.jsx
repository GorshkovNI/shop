import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCart } from '../../store/selector/selector';
import { addNewSneaker } from '../../store/slice/cart';
import { Card } from './Card';

export const CardContainer = () => {
  const [items, setItems] = useState([]);
  const dispath = useDispatch();

  useEffect(() => {
    fetch('https://63b944c03329392049ef1a2c.mockapi.io/sneakers')
      .then((res) => {
        return res.json();
      })
      .then((json) => setItems(json));
  }, []);

  const addInCart = (e) => {
    dispath(addNewSneaker({ id: e.currentTarget.id }));
  };

  const selectedSneaker = useSelector(getAllCart);

  return (
    <>
      {items.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            selected={selectedSneaker.includes(item.id)}
            describe={item.describe}
            price={item.price}
            photo={item.photo}
            addInCart={addInCart}
          />
        );
      })}
    </>
  );
};
