import React from 'react';
import {Text} from "@/shared/ui/Text";
import {Filter} from "@/shared/ui/Filter";
import {Input} from "@/shared/ui/Input";

import styles from "./styles.module.scss";
import {PrimaryButton} from "@/shared/ui/Button";

export const Options = ({ children, name }: { children: JSX.Element, name: string }) => {
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
                placeholder="e.g 5"
                label="Trip duration"
                children={name}
            />

            <div className={styles.preferences}>
                <Text>Locations preferences</Text>
                <Filter/>
            </div>
            <div className={styles.checkbox}>
                <div>
                    Please show me nearby sights 150 km range
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
