import React from 'react';
import { useTranslation } from "react-i18next";

import styles from '@/entities/LanguageFlag/styles.module.scss';


export default function LanguageFlag() {

    const languages = [
        {
            code: 'en',
            country_code: 'en',
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

    const { t, i18n } = useTranslation();

    const [isOpen, setIsOpen] = React.useState(false);
    const languageDiv = React.useRef(null);
    
    const [currLanguage, setCurrLanguage] = React.useState("");

    React.useEffect(() => {
        setCurrLanguage(i18n.language);

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event: any) => {
        const path = event.path || (event.composedPath && event.composedPath());

        if (!path.includes(languageDiv.current)) {
            setIsOpen(false);
        }
    };

    return (
        <div className={styles.flags} ref={languageDiv}>
            <div className={styles.text + (isOpen ? ` ${styles.disabled}` : "")} onClick={(e) => {e.stopPropagation; setIsOpen(true)}}>
                <p>{t("language")}</p>
            </div>
            <div className={styles.languages + (isOpen ? "" : ` ${styles.disabled}`)}>
                {languages.map(({ code, name, country_code, icon }) => (
                    <p key={code} onClick={(e) => {e.stopPropagation; i18n.changeLanguage(code); setCurrLanguage(code)}} className={currLanguage == code ? `${styles.active}` : ""}>{code}</p>
                ))}
            </div>
        </div>
    )
}