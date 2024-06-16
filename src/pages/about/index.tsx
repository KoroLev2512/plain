import React from 'react';
import {Text} from "@/shared/ui/Text"
import {Header} from "@/entities/Header";
import Image from "next/image";

import styles from "./styles.module.scss";

const about = [
    [
        {
            title: "What is Plain?",
            text: "Plain is your friendly artificial intelligence-based travel assistant. We've trained it to whip up awesome travel plans based on your interests. Think of it as having your own personal travel guru who can create a tailored itinerary for you in just a few minutes!"
        },
        {
            title: "What Can Plain Do?",
            text: "Plain is pretty nifty! Right now, it can find cool attractions and suggest places and activities that match your interests. In the future, we're planning to teach it to recommend top-notch hotels and restaurants nearby. Heck, we might even get it booking hotels and inns, so you won't have to stress about your vacation plans for even a second!"
        },
        {
            title: "When Can I Use Plain?",
            text: "You can use Plain for adventures in other cities and countries, or even for exploring your own hometown! It's perfect whether you're planning a big, elaborate trip or just a quick getaway to a nearby city for a couple of days. Plus, it's lightning-fast, so it's great for spontaneous trips too!"
        },
        {
            title: "What Can Plain Do?",
            text: "Plain is pretty nifty! Right now, it can find cool attractions and suggest places and activities that match your interests. In the future, we're planning to teach it to recommend top-notch hotels and restaurants nearby. Heck, we might even get it booking hotels and inns, so you won't have to stress about your vacation plans for even a second!"
        },
        {
            title: "When Can I Use Plain?",
            text: "You can use Plain for adventures in other cities and countries, or even for exploring your own hometown! It's perfect whether you're planning a big, elaborate trip or just a quick getaway to a nearby city for a couple of days. Plus, it's lightning-fast, so it's great for spontaneous trips too!"
        },
    ],
]

const About = () => {
    return (
        <>
            <Header/>
            {about.map((item) => (
                <div key={item[0].title} className={styles.wrapper}>
                    {item.map(about => (
                        <div key={about.title} className={styles.list}>
                            <Text as="h2" className={styles.item}>
                                {about.title}
                            </Text>
                            <Text className={styles.requestsList}>
                                {about.text}
                            </Text>
                        </div>
                    ))}
                    <div key={item[0].title} className={styles.div5}>
                        <div>
                            <Text as="h2" className={styles.item}>
                                Who's Behind Plain?
                            </Text>
                            <Text className={styles.requestsList}>
                                We're a bunch of travel enthusiasts! Meet our team: Michael, our globetrotting CEO, who's been to over 30 countries and helped tons of travelers plan their dream trips. Eugene, our tech genius CTO, is all about AI and machine learning. And Julia, our vibrant CMO, spreads the word about our product to as many folks as possible. We're all in this together to make your travels amazing!
                            </Text>
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
                    </div>
                    <div className={styles.div6}>
                        <div className={styles.contacts}>
                            <Text className={styles.textContacts}>
                                Got any questions? <br/>
                                Mail us!<br/>
                                Michael@plaintrips.com
                            </Text>
                        </div>
                        <div className={styles.free}>
                            <Text as="h2" className={styles.item}>
                                Is Plain Free?
                            </Text>
                            <Text className={styles.requestsList}>
                                Yup, it won't cost you a dime to use our service. It's on the house!
                            </Text>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default About;
