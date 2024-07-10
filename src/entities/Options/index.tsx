import React from 'react';
import {Text} from "@/shared/ui/Text";
import {Filter} from "@/shared/ui/Filter";
import {Input} from "@/shared/ui/Input";
import {PrimaryButton} from "@/shared/ui/Button";
import TooltipIcon from "@/../public/icons/tooltip.svg"

import styles from "./styles.module.scss";

export const Options = ({ name }: { name: string }) => {
    return (
        <div className={styles.wrapper}>
            <Text className={styles.text}>
                Options
            </Text>
            <Input
                className={styles.destination}
                placeholder="e.g. Rome or Florida"
                label="Enter destination"
                children={name}
            />
            <Input
                className={styles.interests}
                placeholder="e.g. Photoblogging, Art, Museums"
                label="Enter your interests"
                children={name}
            />
            <Input
                className={styles.duration}
                placeholder="e.g. 5"
                label="Trip duration"
                children={name}
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
                    <input id="nearbyLocations" type="checkbox"/>
                    <label htmlFor="nearbyLocations">Please show me nearby sights 150 km range</label>
                    <div>
                        {/*<TooltipIcon/>*/}
                    </div>
                </div>
                <div className={styles.localCuisine}>
                    <input id="localCuisine" type="checkbox"/>
                    <label htmlFor="localCuisine">Add local cuisine tips</label>
                </div>
            </div>
            <PrimaryButton className={styles.button}>
                <div className={styles.firstLine}>LET'S</div>
                <div>PLAIN!</div>
            </PrimaryButton>
        </div>
    );
}
