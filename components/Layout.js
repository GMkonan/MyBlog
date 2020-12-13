import GlobalStyle from '../styles/GlobalStyle';

const Layout = ({ children }) => {

    return (
        <div style={{margin: '0 auto', width: '800px'}}>
            <GlobalStyle />
            <main>
                <div>{children}</div>
            </main>
        </div>
    )
}

export default Layout;