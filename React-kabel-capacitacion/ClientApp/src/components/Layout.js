import * as React from 'react';
import { Link } from 'react-router-dom';
import { MarkGithubIcon } from '@primer/octicons-react';

const Layout = ({ children }) => {
    return (
        <div className="h-full flex flex-col justify-between">
            <div>
                <header className="p-4 bg-blue-400 shadow"><Link className="text-white font-bold" to="/">React capacitacion Kabel</Link></header>
                <main style={{ maxWidth: "90vw", width: "1024px" }} className="m-auto my-7">
                    {children}
                </main>
            </div>
            <footer className="bg-gray-200 text-center p-4 grid">
                <span>Guillermo Priego - {new Date().getFullYear()}</span>
                <a href="https://github.com/GuillermoPriego/React-kabel-capacitacion" rel="noopener noreferrer" target="_blank"><MarkGithubIcon /> Ver repositorio</a>
            </footer>
        </div>
    );
};

export default Layout;