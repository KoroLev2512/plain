import React from 'react';
import styles from "./styles.module.scss";
import {useTranslation} from "react-i18next";


export const Content = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.wrapper}>
            {t("Content")}
        </div>
    );
};
