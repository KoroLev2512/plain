import React, {Suspense} from "react";
import {HomePage} from "@/features/layouts/home/";
import {useTranslation} from "react-i18next";

const App = () => {
    const { t } = useTranslation();
    return (
        <Suspense fallback={<div>{t("Loading")}</div>}>
            <HomePage name=""/>
        </Suspense>
    )
}


export default App;