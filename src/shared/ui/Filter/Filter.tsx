import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from "./styles.module.scss"

export const Filter = () => {
    const { t } = useTranslation();

    const filters = ["mainstream", "balanced", "hidden gems"]
    const [selectedFilter, setSelectedFilter] = React.useState<string>("");

    const handleFilterClick = (filter: string) => {
        if (selectedFilter === filter) {
            return;
        }
        setSelectedFilter(filter);
    }

    return (
        <div className={styles.wrapper}>
            {filters.map((filter, index) => (
                <div key={index}
                     className={`${styles.filter} ${selectedFilter === filter ? styles.selected : ""}`}
                     onClick={(e) => {handleFilterClick(filter)}}>
                    {t(filter)}
                </div>
            ))}
        </div>
    );
};
