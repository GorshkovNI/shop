import React from "react";
import { Icon } from "../Icons/Icon";
import styles from './Input.module.css'
import cn from 'classnames'

export const Input = ({className}) => {
    return(
        <div className={cn(styles._, className)}>
            <div className={styles.wrapper}>
                <div>
                    <Icon className={styles.icon} name='search' />
                </div>
                <input className={styles.input} placeholder='Поиск...' />
            </div>
        </div>
    )
    
}