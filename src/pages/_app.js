import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Explore Tidung</title>
            </Head>
            <main className={inter.className}>
                <Component {...pageProps} />
            </main>
        </>
    )
}
