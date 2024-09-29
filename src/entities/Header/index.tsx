import React from 'react';
import Link from 'next/link';
import LanguageFlag from "@/entities/LanguageFlag";
import styles from "./styles.module.scss";
import { useTranslation } from 'react-i18next';

export const Header = () => {
    const { t } = useTranslation();
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
                <Link href={'/about'} className={styles.button_item}>
                    <div>{t("about us")}</div>
                </Link>
            </div>
        </div>
    );
}
