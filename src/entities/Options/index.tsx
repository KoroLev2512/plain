import React from 'react';
import Image from 'next/image';
import {Text} from "@/shared/ui/Text";
import {Filter} from "@/shared/ui/Filter";
import {Input} from "@/shared/ui/Input";
import {PrimaryButton} from "@/shared/ui/Button";
import {TripDuration} from '../TripDuration';
import TooltipIcon from "@/../public/icons/tooltip.svg"
import { useTranslation } from 'react-i18next';

import styles from "./styles.module.scss";



export const Options = ({ name }: { name: string }) => {
    const { t } = useTranslation();
    return (
        <div className={styles.wrapper}>
            <Text className={styles.text}>
                {t("Options")}
            </Text>
            <div className={styles.inputGrid}>
                <Text>{t("Enter destination")}</Text>
                <Input
                    className={styles.destination}
                    placeholder={t("Destination example")}
                    children={name}
                />

                <Text>{t("Enter your interests")}</Text>
                <Input
                    className={styles.interests}
                    placeholder={t("Interest example")}
                    children={name}
                />

                <div className={styles.tripDurationWrapper}>
                    <Text>
                        {t("Trip duration")}
                    </Text>
                    <div className={styles.tooltipWrapper}>
                        <span className={styles.tooltip} data-text={t("Tooltip 1")}>
                            <Image
                                src={TooltipIcon}
                                alt=" ? "
                            />
                        </span>
                    </div>
                </div>
                <TripDuration/>
                <div className={styles.preferencesTitle}>
                    <Text>{t("Locations preferences")}</Text>
                    <div className={styles.tooltipWrapper}>
                        <span className={styles.tooltip} data-text={t("Tooltip 2")}>
                            <Image
                                src={TooltipIcon}
                                alt=" ? "
                            />
                        </span>
                    </div>
                </div>
                <Filter/>
            </div>

            <div className={styles.checkbox}>
                <div className={styles.nearbyLocations}>
                    <input id="nearbyLocations" type="checkbox"/>
                    <label htmlFor="nearbyLocations">
                        {t("Checkbox 1")}
                    </label>
                    <div className={styles.tooltipWrapper}>
                        <span className={styles.tooltip} data-text={t("Tooltip 3")}>
                            <Image
                                src={TooltipIcon}
                                alt=" ? "
                            />
                        </span>
                    </div>
                </div>
                <div className={styles.localCuisine}>
                    <input id="localCuisine" type="checkbox"/>
                    <label htmlFor="localCuisine">{t("Checkbox 2")}</label>
                </div>
            </div>
            <PrimaryButton className={styles.button}>
                <div className={styles.firstLine}>LET'S</div>
                <div>PLAIN!</div>
            </PrimaryButton>
        </div>
    );
}
