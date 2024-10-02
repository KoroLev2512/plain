import type { AppProps } from 'next/app';
import AppWrapper from "@/features/wrappers/AppWrapper";
import { appWithI18Next } from "ni18n";
import { ni18nConfig } from "@/../ni18n.config";

import '../styles/globals.scss';

function App({ Component, pageProps }: AppProps) {
    return (
        <AppWrapper>
            <Component {...pageProps} />
        </AppWrapper>
    );
}

export default appWithI18Next(App, ni18nConfig);
