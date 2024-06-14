import React from 'react';
import Link from 'next/link';

import styles from "./styles.module.scss";

export const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                <img
                    src='/icons/logo.svg'
                    alt="logo"
                />
            </div>
            <div className={styles.buttons}>
                <div className={styles.button_item}>language</div>
                <Link href={'/about'}>
                    <div className={styles.button_item}>about us</div>
                </Link>
            </div>
        </div>
    );
}
