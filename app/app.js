import React from 'react';

import {Navbar} from './components';

const brandName = 'Frontend Task for Oleg';

const navLinks = [{
    to: '/about',
    label: 'About'
}, {
    to: '/contact',
    label: 'Contact'
}, {
    to: '/bonus',
    label: 'Bônus'
}];

export default ({children}) => (
    <div>
        <Navbar brandName={brandName} navLinks={navLinks} />
        {children}
    </div>
);
