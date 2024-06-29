import React from 'react';
import Link from 'next/link';
import LanguageFlag from "@/entities/LanguageFlag";

import styles from "./styles.module.scss";

interface IProps {
    language: string;
}

export const Header = () => {
    return (
        <div className={styles.wrapper}>
            <Link href={'/'} className={styles.logo}>
                <img
                    src='/icons/logo.svg'
                    alt="logo"
                />
            </Link>
            <div className={styles.buttons}>
                <div className={styles.button_language}>
                    <LanguageFlag/>
                </div>
                <Link href={'/about'}>
                    <div className={styles.button_item}>about us</div>
                </Link>
            </div>
        </div>
    );
}
