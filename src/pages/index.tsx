import React, {Suspense} from "react";
import {HomePage} from "@/features/layouts/home/";
import {useTranslation} from "react-i18next";
import "i18n"

const App = () => {
    const {t, i18n} = useTranslation()
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HomePage name="" t={t} language={i18n.language}/>
        </Suspense>
    )
}

export default App;