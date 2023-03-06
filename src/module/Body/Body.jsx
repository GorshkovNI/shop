import React, { useEffect, useState } from 'react';
import { CardContainer } from '../../Components/Card/CardContainer';
import styles from './Body.module.css';
import { Search } from '../Search/Search';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredSneakers } from '../../store/selector/selector';
//import useDebounce from "../../hooks/useDebounce/useDebounce";
import { setSearch } from '../../store/slice/sneaker';
import { Preloader } from '../../Components/Preloader/Preloader';

export const Body = () => {
  const [value, setValue] = useState('');
  const [isLoad, setIsLoad] = useState(false);

  const handleValue = ({ target: { value } }) => {
    setValue(value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoad(true);
  }, [value]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setSearch({ key: 'search', value: value }));
      setIsLoad(false);
    }, 1000);
  }, [isLoad]);

  const sneakers = useSelector(getFilteredSneakers);

  return (
    <div className={styles.wrapper}>
      <Search value={value} onChange={handleValue} />
      <div className={styles.cards}>
        <CardContainer data={sneakers} />
      </div>
      {isLoad ? <Preloader /> : ''}
    </div>
  );
};
