import React from 'react';
import {Link} from 'react-router';

export default ({to, children}) => (
    <li>
        <Link to={to}>
            {children}
        </Link>
    </li>
);
