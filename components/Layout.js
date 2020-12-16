import GlobalStyle from '../styles/GlobalStyle';

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