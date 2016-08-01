import './stylesheet.less';

import React from 'react';

export default ({children}) => (
    <div className="container">
        <div className="container__wrapper">
            {children}
        </div>
    </div>
);
