import DeleteButton from '../Layout/DeleteButton';
import styles from './Card.module.css'
import React from 'react';

const Card = ({ name, age, title , gender , id, deleteFunc}) => {
    return (
        <>
        <div
            className={styles.cardWrap}
            style={{ backgroundColor: gender === "male" ? "lightblue" : "pink" }}>
          <div>Name : { name }</div>
          <div>Age : { age }</div>
          <div>Title : {title}</div>
          <DeleteButton  onClick={ (e) => deleteFunc(e,id)} id={id}/>
          </div> 
                </>
    );
}
 
export default Card;