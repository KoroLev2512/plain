import React from "react";
import { Layout } from "./types";
import {ContentWrapper} from "@/features/wrappers/ContentWrapper";
import {Header} from "@/entities/Header";

import styles from "./styles.module.scss";

const AppWrapper = (props: Layout) => {
	const {children} = props;

	return (
		<div className={styles.appWrapper}>
			<Header/>
			<ContentWrapper>{children}</ContentWrapper>
		</div>
	);
};

export default AppWrapper;
