import React from 'react';
import { Options } from "@/entities/Options";
import { Content } from "@/entities/Content";
import {TFunction} from "i18next";

interface IProps {
    name: string;
    t: TFunction;
    language: string;
}

export const HomePage: React.FC<IProps> = ({ t }) => {
    return (
        <div>
            <Options name=""/>
            <Content/>
        </div>
    );
}
