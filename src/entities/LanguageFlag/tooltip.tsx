import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <p>language</p>
            <Tooltip title="Select language" placement="bottom">
                <div>
                    <button onClick={() => changeLanguage('en')}>English</button>
                    <button onClick={() => changeLanguage('ru')}>Русский</button>
                </div>
            </Tooltip>
        </div>
    );
}

export default LanguageSwitcher;