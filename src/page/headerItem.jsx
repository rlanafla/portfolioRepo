import React from 'react';
import { Link } from 'react-scroll'

const HeaderItem = ({ to, children }) => {
    return (
        <Link to={to} smooth={true} duration={500}>
            <h1 className="text-3xl font-semibold text-green hover:text-black hover:cursor-pointer transition duration-300">
                {children}
            </h1>
        </Link>
    )
}

export default HeaderItem;