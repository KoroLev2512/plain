import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import AppWrapper from "@/features/wrappers/AppWrapper"

function App({Component, pageProps}: AppProps) {

    return (
        <AppWrapper>
            <Component {...pageProps} />
        </AppWrapper>
    )
}

export default App;
