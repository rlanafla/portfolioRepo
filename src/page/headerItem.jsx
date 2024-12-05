import React from 'react';
import { Link } from 'react-scroll'

const HeaderItem = ({ to, children }) => {
    return (
        <Link to={to} smooth={true} duration={700}>
            <h1 className="text-3xl font-semibold text-green hover:text-black hover:text-4xl hover:cursor-pointer hover:bg-white transition-all duration-300">
                {children}
            </h1>
        </Link>
    )
}

export default HeaderItem;