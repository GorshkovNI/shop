import React from 'react';
import styles from './Header.module.css';
import logo from '../Icons/Icon/header.png';
import { Icon } from '../Icons/Icon';
import { formatMoney } from '../../utils/formatMoney';
import cn from 'classnames';

export const Header = ({ money = 0, onCartVisible }) => {
  return (
    <header className={styles._}>
      <div className={styles.header}>
        <div className={styles.logoArea}>
          <img className={styles.logo} src={logo} />
          <div className={styles.aboutShop}>
            <span className={styles.nameShop}>SNEAKERS</span>
            <span className={styles.describe}>Магазин лучших кроссовок</span>
          </div>
        </div>
        <div className={styles.rigthPart}>
          <div className={styles.basket}>
            <Icon
              name='cart'
              className={cn(styles.icon, styles.cart)}
              onClick={onCartVisible}
            />
            <span className={styles.money}>{formatMoney(money)}</span>
          </div>
          <Icon name='heart' className={styles.icon} />
          <Icon name='user' className={styles.icon} />
        </div>
      </div>
      <div className={styles.line}></div>
    </header>
  );
};
