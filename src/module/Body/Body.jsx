import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../../Components/Card/Card";
import { getAllSneakers } from "../../store/selector/selector";
import styles from './Body.module.css'

export const Body = () => {

    const sneakers = useSelector(getAllSneakers)
    return(
        <div className={styles.wrapper}>
            {sneakers.map((item) => {
                return <Card key={item.id} />
            })}
        </div>
    )
}