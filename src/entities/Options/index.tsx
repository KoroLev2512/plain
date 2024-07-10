import React from 'react';
import Image from 'next/image';
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
            {/* <div className={styles.tooltipWrapper}>
                <span className={styles.tooltip} data-text="Please choose the number of days you will spend traveling">
                    <Image
                        src={TooltipIcon}
                        alt=" ? "
                    />
                </span>
            </div> */}
            
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
                    <div className={styles.tooltipWrapper}>
                        <span className={styles.tooltip} data-text="If you’re visiting the destination for the first time, you might be interested in popular locations. Experienced traveller might go for hidden gems or a mix of both.">
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
                    Please show me nearby sights 150 km range
                    <div className={styles.tooltipWrapper}>
                        <span className={styles.tooltip} data-text="Helps you to explore the area around a small town">
                            <Image
                                src={TooltipIcon}
                                alt=" ? "
                            />
                        </span>
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
