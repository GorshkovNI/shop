import React from 'react';
import { Icon } from '../Icons/Icon';
import styles from './Input.module.css';
import cn from 'classnames';

export const Input = ({ className, value, onChange }) => {
  return (
    <div className={cn(styles._, className)}>
      <div className={styles.wrapper}>
        <div>
          <Icon className={styles.icon} name='search' />
        </div>
        <input
          className={styles.input}
          value={value}
          onChange={onChange}
          placeholder='Поиск...'
        />
      </div>
    </div>
  );
};
