import GlobalStyle from '../styles/GlobalStyle';
import Head from 'next/head'

const Layout = ({ children }) => {

    return (
        <div>
            <Head>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
                <title>Konan Blog</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <GlobalStyle />
            <main>
                <div>{children}</div>
            </main>
        </div>
    )
}

export default Layout;