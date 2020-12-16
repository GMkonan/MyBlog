import GlobalStyle from '../styles/GlobalStyle';
import Head from 'next/head';

const Layout = ({ children }) => {

    return (
        <div>
            <GlobalStyle />
            <main>
                <div>{children}</div>
            </main>
        </div>
    )
}

export default Layout;