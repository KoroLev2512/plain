import React from 'react';
import {Text} from "@/shared/ui/Text"
import Image from "next/image";
import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

const about = [
    "What is Plain?", "What Can Plain Do?", "When Can I Use Plain?", "How Good Are Plain's Recommendations?", "How Do I Use Plain?",
]



const About = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className={styles.wrapper}>
                {about.map((name, i) => (
                    <div key={i} className={styles.list}>
                        <Text as="h2" className={styles.item}>
                            {t("Title: " + name)}
                        </Text>
                        <Text className={styles.requestsList}>
                            {t("Description: " + name)}
                        </Text>
                    </div>
                ))}
                <div className={styles.div5}>
                    <div>
                        <Text as="h2" className={styles.item}>
                            {t("Title: Who's Behind Plain?")}
                        </Text>
                        <Text className={styles.requestsList}>
                            {t("Description: Who's Behind Plain?")}
                        </Text>
                        
                    </div>
                    <div className={styles.cardList}>
                        <div className={styles.card}>
                            <Image
                                src={"/images/image_1.png"}
                                width={152}
                                height={204}
                                alt=""
                                className={styles.cardImage}
                            />
                            <Text className={styles.cardLabel}>
                                Eugene Balkind
                            </Text>
                        </div>
                        <div className={styles.card}>
                            <Image
                                src={"/images/image_2.png"}
                                width={152}
                                height={204}
                                alt=""
                                className={styles.cardImage}
                            />
                            <Text className={styles.cardLabel}>
                                Julia Irtyuga
                            </Text>
                        </div>
                        <div className={styles.card}>
                            <Image
                                src={"/images/image_3.png"}
                                width={152}
                                height={204}
                                alt=""
                                className={styles.cardImage}
                            />
                            <Text className={styles.cardLabel}>
                                Michael Nikolaev
                            </Text>
                        </div>
                    </div>
                </div>
                <div className={styles.div6}>
                    <div className={styles.contacts}>
                        <div className={styles.contactsMobile}>
                            <Text className={styles.textContacts}>
                                {t("Got any questions?")}
                            </Text>
                        </div>
                    </div>
                    <div className={styles.free}>
                        <Text as="h2" className={styles.item}>
                            {t("Title: Is Plain Free?")}
                        </Text>
                        <Text className={styles.requestsList}>
                            {t("Description: Is Plain Free?")}
                        </Text>
                    </div>
                </div>
            </div>
        </>
    );
};



export default About;
