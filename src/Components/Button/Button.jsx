import React from 'react';
import { Icon } from '../Icons/Icon';
import styles from './Button.module.css';
import cn from 'classnames';

export const Button = ({
  leftIcon,
  rigthIcon = true,
  className,
  size,
  mode = 'primary',
  children,
}) => {
  const buttonClassName = cn(styles._, className, {
    [styles.primary]: mode === 'primary',

    [styles.big]: size === 'big',
  });

  return (
    <button className={buttonClassName}>
      {leftIcon && <Icon />}
      {rigthIcon && <Icon />}
      {children}
    </button>
  );
};
