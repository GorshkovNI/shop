import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getOnlyLikedId,
  getSelectedSneakers,
} from '../../store/selector/selector';
import {
  addNewSneaker,
  cartSneaker,
  likeSneakers,
} from '../../store/slice/sneaker';
import { Card } from './Card';

export const CardContainer = ({ data }) => {
  const dispath = useDispatch();

  const addInCart = (e) => {
    dispath(addNewSneaker({ id: e.currentTarget.id }));
    dispath(cartSneaker({ id: e.currentTarget.id }));
  };

  const likeSneaker = (e) => {
    dispath(likeSneakers({ id: e.currentTarget.id }));
  };

  const likedCard = useSelector(getOnlyLikedId);
  const selectedSneaker = useSelector(getSelectedSneakers);

  return (
    <>
      {data?.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            selected={selectedSneaker.includes(item.id)}
            like={likedCard?.includes(item.id)}
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
