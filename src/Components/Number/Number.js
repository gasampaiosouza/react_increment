import React from 'react';
import styles from './Number.module.css';

function Number() {
    return (
        <div className={styles.numberContainer}>
            <h1 className={styles.number} id='number'>0</h1>
        </div>
    )
}

export default Number;