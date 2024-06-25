import React from 'react';

import styles from "./styles.module.scss"

export const Filter = () => {
    return (
        <>
            <div className={styles.filter}>
                mainstream
            </div>
            <div className={styles.filter}>
                balanced
            </div>
            <div className={styles.filter}>
                hidden gems
            </div>
        </>
    );
};
