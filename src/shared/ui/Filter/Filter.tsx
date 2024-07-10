import React from 'react';

import styles from "./styles.module.scss"

export const Filter = () => {
    return (
        <div className={styles.wrapper}>
            {/* uncomment line below to check for selected style */}
            {/* <div className={styles.filter + " " + styles.selected}> */}
            <div className={styles.filter}>
                mainstream
            </div>
            <div className={styles.filter}>
                balanced
            </div>
            <div className={styles.filter}>
                hidden gems
            </div>
        </div>
    );
};
