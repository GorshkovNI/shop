import React from 'react';
import { Icon } from '../Icons/Icon';
import styles from './Button.module.css';
import cn from 'classnames';

export const Button = ({
  vector,
  className,
  size,
  mode = 'primary',
  children,
  onClick,
}) => {
  const buttonClassName = cn(styles._, className, {
    [styles.primary]: mode === 'primary',
    [styles.big]: size === 'big',
  });

  const vectorArrow = cn(styles.icon, {
    [styles.leftSide]: vector === 'left',
    [styles.rightSide]: vector === 'right',
  });

  return (
    <button className={buttonClassName} onClick={onClick}>
      {vector && <Icon className={vectorArrow} name='arrow' />}
      {children}
    </button>
  );
};
