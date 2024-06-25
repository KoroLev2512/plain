import React from 'react';
import { Header } from "@/entities/Header";
import { Options } from "@/entities/Options";
import { Content } from "@/entities/Content";

import styles from './styles.module.scss';

export const HomePage: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <Options/>
            <Content/>
        </div>
    );
}
