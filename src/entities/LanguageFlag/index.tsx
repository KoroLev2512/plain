import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import cookies from 'js-cookie'
import { useTranslation } from "react-i18next";
import i18next from 'i18next'

import styles from '@/entities/LanguageFlag/styles.module.scss';


export default function LanguageFlag() {

    const languages = [
        {
            code: 'en',
            country_code: 'gb',
            name: 'English',
            icon: '/icons/eng.png'
        },
        {
            code: 'ru',
            country_code: 'ru',
            name: 'Русский',
            icon: '/icons/rus.png'
        },
    ]

    const { t } = useTranslation();

    const currentLanguageCode = cookies.get('i18next') || 'en'

    const [anchorEl, setAnchorEl] = React.useState<null | Element>(null);    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={styles.flags}>
            <div className={styles.text} onClick={handleClick}>
                <p>language</p>
            </div>
            <div className={styles.languages}>
                {languages.map(({ code, name, country_code, icon }) => (
                    <p key={code} onClick={() => i18next.changeLanguage(code)} className={currentLanguageCode == code ? styles.active : ""}>{country_code}</p>
                ))}
            </div>
        </div>
    )
}