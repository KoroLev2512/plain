import React from 'react';
import { Options } from "@/entities/Options";
import { Content } from "@/entities/Content";

interface IProps {
    name: string;
}

export const HomePage: React.FC<IProps> = () => {
    return (
        <div>
            <Options name=""/>
            <Content/>
        </div>
    );
}
