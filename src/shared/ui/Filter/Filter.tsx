import React from 'react';

import styles from "./styles.module.scss"

export const Filter = () => {

    const filters = ["mainstream", "balanced", "hidden gems"]
    const [selectedFilters, setSelectedFilters] = React.useState<string[]>([]);

    const handleFilterClick = (filter: string) => {
        if (selectedFilters.includes(filter)) {
            setSelectedFilters(selectedFilters.filter(f => f !== filter));
        } else {
            setSelectedFilters([...selectedFilters, filter]);
        }
    }

    return (
        <div className={styles.wrapper}>
            {/* uncomment line below to check for selected style */}
            {/* <div className={styles.filter + " " + styles.selected}> */}
            {filters.map((filter, index) => (
                <div key={index}
                     className={`${styles.filter} ${selectedFilters.includes(filter) ? styles.selected : ""}`}
                     onClick={(e) => {handleFilterClick(filter)}}>
                    {filter}
                </div>
            ))}
        </div>
    );
};
