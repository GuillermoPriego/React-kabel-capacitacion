import * as React from 'react'
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div>
            <header className="p-4 bg-blue-400 shadow"><Link className="text-white font-bold" to="/">React capacitacion Kabel</Link></header>
            <main style={{ maxWidth: "90vw", width: "1024px" }} className="m-auto my-2">
                {children}
            </main>
        </div>
    );
}

export default Layout;