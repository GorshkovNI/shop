import React, { useEffect, useState } from 'react';
import { Card } from './Card';

export const CardContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://63b944c03329392049ef1a2c.mockapi.io/sneakers')
      .then((res) => {
        return res.json();
      })
      .then((json) => setItems(json));
  }, []);

  return (
    <>
      {items.map((item) => {
        return (
          <Card
            key={item.id}
            describe={item.describe}
            price={item.price}
            photo={item.photo}
          />
        );
      })}
    </>
  );
};
