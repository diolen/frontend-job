import './stylesheet.less';

import React from 'react';
import {Link} from 'react-router';
import Item from './Item';

export default ({brandName, navLinks}) => (
    <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
            <div className="navbar-header">
                <Link to="/" className="navbar-brand">{brandName}</Link>
            </div>
            <ul className="nav navbar-nav">
                {
                    navLinks.map((link, i) => <Item key={i} to={link.to}>{link.label}</Item>)
                }
            </ul>
        </div>
    </nav>
);
