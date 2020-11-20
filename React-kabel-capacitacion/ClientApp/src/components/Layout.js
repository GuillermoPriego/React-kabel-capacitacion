import * as React from 'react'

const Layout = ({ children }) => {
    return (
        <div>
            <header>App</header>
            <main>
                {children}
            </main>
        </div>
    );
}

export default Layout;