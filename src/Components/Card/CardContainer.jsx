import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getAllSneakers,
  getSelectedSneakers,
} from '../../store/selector/selector';
import {
  addNewSneaker,
  cartSneaker,
  likeSneakers,
} from '../../store/slice/sneaker';
import { Card } from './Card';

export const CardContainer = () => {
  const [likedSneaker, setLikedSneaker] = useState([]);

  const sneakers = useSelector(getAllSneakers);
  const dispath = useDispatch();

  const addInCart = (e) => {
    dispath(addNewSneaker({ id: e.currentTarget.id }));
    dispath(cartSneaker({ id: e.currentTarget.id }));
  };

  const likeSneaker = (e) => {
    likedSneaker.includes(e.currentTarget.id)
      ? setLikedSneaker(
          likedSneaker.filter((item) => item !== e.currentTarget.id)
        )
      : setLikedSneaker([...likedSneaker, e.currentTarget.id]);
    dispath(likeSneakers({ id: e.currentTarget.id }));
  };

  const selectedSneaker = useSelector(getSelectedSneakers);

  return (
    <>
      {sneakers.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            selected={selectedSneaker.includes(item.id)}
            like={likedSneaker.includes(item.id)}
            describe={item.describe}
            price={item.price}
            photo={item.photo}
            addInCart={addInCart}
            likeSneaker={likeSneaker}
          />
        );
      })}
    </>
  );
};
