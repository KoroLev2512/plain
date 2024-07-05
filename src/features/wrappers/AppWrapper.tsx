import React from "react";
import { Layout } from "./types";
import {ContentWrapper} from "@/features/wrappers/ContentWrapper";
import {Header} from "@/entities/Header";
import {useTranslation} from "react-i18next";

import styles from "./styles.module.scss";

const AppWrapper = (props: Layout) => {
	const {children} = props;
	const {t, i18n} = useTranslation();
	const changeLanguage = (language: string) => {
		i18n.changeLanguage(language);
	};

	return (
		<div className={styles.appWrapper}>
			<Header/>
			<ContentWrapper>{children}</ContentWrapper>
		</div>
	);
};

export default AppWrapper;

