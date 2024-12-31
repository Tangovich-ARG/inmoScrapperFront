import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                <h1 className="text-3xl font-bold">
                    <Link to="/" className="hover:text-blue-200 transition-colors">
                        InmoScrapper
                    </Link>
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/" className="hover:text-blue-200 transition-colors">
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-blue-200 transition-colors">
                                Acerca de
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-blue-200 transition-colors">
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;