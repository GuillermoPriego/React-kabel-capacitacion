import * as React from 'react'

const Layout = ({ children }) => {
    return (
        <div>
            <header className="p-4">App</header>
            <main>
                {children}
            </main>
        </div>
    );
}

export default Layout;