import React, { MouseEventHandler } from "react";
import styles from "./styles.module.scss";

export const TripDuration = () => {
    const selection: string[] = ["1 day", "2 days", "3 days", "4 days", "5 days"];

    const [currentDay, setCurrentDay] = React.useState("1 day");
    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownAreaRef = React.useRef(null);
    const clickAreaRef = React.useRef(null);

    React.useEffect(() => {
        document.addEventListener("click", handleClickOutside);
    
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event: any) => {
        const path = event.path || (event.composedPath && event.composedPath());
    
        if (!path.includes(dropdownAreaRef.current) && !path.includes(clickAreaRef.current)) {
            setIsOpen(false);
        }
    };


    return (
        <div className={styles.dropdownWrapper}>
            <p className={styles.dropdown} onClick={() => setIsOpen(!isOpen)} ref={clickAreaRef}>{currentDay}</p>
            <div className={styles.dropdownMenu + (isOpen ? ` ${styles.dropdownOpened}` : "")} ref={dropdownAreaRef}>
                {selection.map((day, i) => (
                    <div
                        className={styles.dropdownElement + (currentDay === day ? ` ${styles.active}` : "")}
                        key={i}
                        onClick={() => {setCurrentDay(day); setIsOpen(false)}}
                    >
                        {day}
                    </div>
                ))}
            </div>
        </div>
    )
};