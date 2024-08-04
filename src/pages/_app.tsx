import type {AppProps} from 'next/app'
import {IntlProvider} from 'next-intl'
import AppWrapper from "@/features/wrappers/AppWrapper"
import {useRouter} from "next/router";

import '../styles/globals.scss'

function App({Component, pageProps}: AppProps) {
    const router = useRouter();
    const locale = router.locale || 'en';

    return (
        <IntlProvider locale={locale} messages={pageProps.messages}>
            <AppWrapper>
                <Component {...pageProps} />
            </AppWrapper>
        </IntlProvider>
    )
}

export default App;
