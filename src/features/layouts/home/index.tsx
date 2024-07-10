import React from 'react';
import { Options } from "@/entities/Options";
import { Content } from "@/entities/Content";
import {TFunction} from "i18next";

interface IProps {
    destination: string;
    interests: string;
    duration: string;
    t: TFunction;
    language: string;
}

export const HomePage: React.FC<IProps> = ({ t }) => {
    return (
        <div>
            <Options destination='' interests='' duration='1'/>
            <Content/>
        </div>
    );
}
