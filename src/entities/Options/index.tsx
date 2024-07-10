import React from 'react';
import {Text} from "@/shared/ui/Text";
import {Filter} from "@/shared/ui/Filter";
import {Input} from "@/shared/ui/Input";
import {PrimaryButton} from "@/shared/ui/Button";
import TooltipIcon from "@/../public/icons/tooltip.svg"

import styles from "./styles.module.scss";

export const Options = ({ destination, interests, duration}: { destination: string, interests: string, duration: string}) => {
    return (
        <div className={styles.wrapper}>
            <Text className={styles.text}>
                Options
            </Text>
            <Input
                className={styles.destination}
                placeholder="e.g. Rome or Florida"
                label="Enter destination"
                children={destination}
            />
            <Input
                className={styles.interests}
                placeholder="e.g. Photoblogging, Art, Museums"
                label="Enter your interests"
                children={interests}
            />
            <Input
                className={styles.duration}
                placeholder="e.g. 5"
                label="Trip duration"
                children={duration}
            />
            {/*<div className={styles.inputWithTooltip}>*/}
            {/*    <Input*/}
            {/*        className={styles.duration}*/}
            {/*        placeholder="e.g 5"*/}
            {/*        label=""*/}
            {/*        children={name}*/}
            {/*    />*/}
            {/*    <div className={styles.tooltipWithTitle}>*/}
            {/*        Trip duration*/}
            {/*        <TooltipIcon/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className={styles.preferences}>
                <div className={styles.preferencesTitle}>
                    <Text>Locations preferences</Text>
                    <div className={styles.tooltip}>
                        {/*<TooltipIcon/>*/}
                    </div>
                </div>
                <Filter/>
            </div>
            <div className={styles.checkbox}>
                <div className={styles.nearbyLocations}>
                    Please show me nearby sights 150 km range
                    <div>
                        {/*<TooltipIcon/>*/}
                    </div>
                </div>
                <div>
                    Add local cuisine tips
                </div>
            </div>
            <PrimaryButton className={styles.button}>
                <div className={styles.firstLine}>LET'S</div>
                <div>PLAIN!</div>
            </PrimaryButton>
        </div>
    );
}
