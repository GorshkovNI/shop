import React from 'react';
import { Input } from '../../Components/Input/Input';
import styles from './Search.module.css';

export const Search = ({ value, onChange }) => {
  return (
    <div className={styles._}>
      <h1>Все кроссовки</h1>
      <Input value={value} onChange={onChange} />
    </div>
  );
};
