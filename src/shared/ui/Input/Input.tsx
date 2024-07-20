import classNames from "classnames";
import React, { FC } from "react";
import {Text} from "@/shared/ui/Text";

import styles from "./style.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
  children: string;
}

export const Input: FC<Props> = ({
	children,
	className,
	...restProps
}) => {
	return (
		<div className={className}>
			<input
				className={classNames(styles.input)}
				value={children}
				{...restProps}
			/>
		</div>
	);
};
