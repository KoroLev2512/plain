import React from 'react';
import Image from 'next/image';
import {Text} from "@/shared/ui/Text";
import {Filter} from "@/shared/ui/Filter";
import {Input} from "@/shared/ui/Input";
import {PrimaryButton} from "@/shared/ui/Button";
import {TripDuration} from '../TripDuration';
import TooltipIcon from "@/../public/icons/tooltip.svg"

import styles from "./styles.module.scss";

export const Options = ({ name }: { name: string }) => {
    return (
        <div className={styles.wrapper}>
            <Text className={styles.text}>
                Options
            </Text>
            <div className={styles.inputGrid}>
                <Text>Enter destination</Text>
                <Input
                    className={styles.destination}
                    placeholder="e.g. Rome or Florida"
                    children={name}
                />

                <Text>Enter your interests</Text>
                <Input
                    className={styles.interests}
                    placeholder="e.g. Photoblogging, Art, Museums"
                    children={name}
                />

                <div className={styles.tripDurationWrapper}>
                    <Text>
                        Trip duration
                    </Text>
                    <div className={styles.tooltipWrapper}>
                        <span className={styles.tooltip} data-text="Please choose the number of days you will spend traveling">
                            <Image
                                src={TooltipIcon}
                                alt=" ? "
                            />
                        </span>
                    </div>
                </div>
                <TripDuration/>
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
                    <input id="nearbyLocations" type="checkbox"/>
                    <label htmlFor="nearbyLocations">
                        Please show me nearby sights 150 km range
                    </label>
                    <div className={styles.tooltipWrapper}>
                        <span className={styles.tooltip} data-text="Helps you to explore the area around a small town">
                            <Image
                                src={TooltipIcon}
                                alt=" ? "
                            />
                        </span>
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
