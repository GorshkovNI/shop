import React from "react";
import { Input } from "../../Components/Input/Input";
import styles from './Search.module.css'

export const Search = () => {
    return(
        <div className={styles._}>
            <h1>Все кроссовки</h1>
            <Input />
        </div>
    )
}