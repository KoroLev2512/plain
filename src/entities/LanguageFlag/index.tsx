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
            {/*<Tooltip title={t('language')} arrow>*/}
                <div className={styles.text} onClick={handleClick}>
                    language
                </div>
            {/*</Tooltip>*/}
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                disableScrollLock={true}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        bgcolor: '#F8F8F8',
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: '#F8F8F8',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,

                        },
                    },
                }}
            >
                {languages.map(({ code, name, country_code, icon}) => (
                    <Tooltip title={name} arrow placement='left'>
                        <MenuItem key={code} style={{
                            backgroundColor: currentLanguageCode === code ? '#D8D8D8' : '#F8F8F8',
                            border: currentLanguageCode === code ? '1px solid #989898' : '#F8F8F8'
                        }}>
                            <IconButton
                                className={styles.flags}
                                onClick={() => {
                                    i18next.changeLanguage(code)
                                }}
                            >
                                <img
                                    src={icon}
                                    alt={name}
                                    width={40}
                                    height={40}
                                />
                                <div className={`flag-icon flag-icon-${country_code}`}
                                     style={{
                                         opacity: currentLanguageCode === code ? 1 : 0.3,
                                         width: '1rem',
                                         height: '1rem',
                                     }}
                                >
                                </div>
                            </IconButton>
                        </MenuItem>
                    </Tooltip>
                ))}
            </Menu>

        </div>
    )
}