import React from "react";
import Card from '../Card/Card'
import styles from './CardList.module.css'

export default function CardList({ listName, deleteFunc }) {
    console.log(listName);
    const cards = listName.map(({id, ...otherProps}) => {
   return <Card key={id} id={id} {...otherProps} deleteFunc={deleteFunc} />;
  })
    return (
      <>
      <div className={styles.cardsContainer}>{cards}</div>
      </>
    )
}
