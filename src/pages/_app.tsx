import type {AppProps} from 'next/app'
import AppWrapper from "@/features/wrappers/AppWrapper"
import {appWithI18Next} from "ni18n";
import {ni18nConfig} from "@/../ni18n.config";
import {useRouter} from "next/router";

import '../styles/globals.scss'

function App({Component, pageProps}: AppProps) {
    const router = useRouter();

    return (
        <AppWrapper>
            <Component {...pageProps} />
        </AppWrapper>
    )
}

export default appWithI18Next(App, ni18nConfig);
