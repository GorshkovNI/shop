import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllCart, getAllSneakers } from '../../store/selector/selector';
import { addNewSneaker } from '../../store/slice/sneaker';
import { Card } from './Card';

export const CardContainer = () => {
  const sneakers = useSelector(getAllSneakers);
  const dispath = useDispatch();

  const addInCart = (e) => {
    dispath(addNewSneaker({ id: e.currentTarget.id }));
  };

  const selectedSneaker = useSelector(getAllCart);

  return (
    <>
      {sneakers.map((item) => {
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
