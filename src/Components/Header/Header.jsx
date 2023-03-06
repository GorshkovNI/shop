import React from 'react';
import styles from './Header.module.css';
import logo from '../Icons/Icon/header.png';
import { Icon } from '../Icons/Icon';
import { formatMoney } from '../../utils/formatMoney';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

export const Header = ({ money = 0, onCartVisible }) => {
  return (
    <header className={styles._}>
      <div className={styles.header}>
        <NavLink to='/' className={styles.nav}>
          <div className={styles.logoArea}>
            <img className={styles.logo} src={logo} />
            <div className={styles.aboutShop}>
              <span className={styles.nameShop}>SNEAKERS</span>
              <span className={styles.describe}>Магазин лучших кроссовок</span>
            </div>
          </div>
        </NavLink>
        <div className={styles.rigthPart}>
          <div className={styles.basket} onClick={onCartVisible}>
            <Icon name='cart' className={cn(styles.icon, styles.cart)} />
            <span className={styles.money}>{formatMoney(money)}</span>
          </div>
          <NavLink to='/bookmarks'>
            <Icon name='heart' className={styles.icon} />
          </NavLink>
          <Icon name='user' className={styles.icon} />
        </div>
      </div>
      <div className={styles.line}></div>
    </header>
  );
};
