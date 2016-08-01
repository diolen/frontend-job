import './bootstrap.less';

// React
import React from 'react';
import ReactDOM from 'react-dom';

// Router
import {Router} from 'react-router';
import {createHistory, useQueries} from 'history';

// Screens
import routes from './routes';

ReactDOM.render(
    <Router history={useQueries(createHistory)()} routes={routes} />,
    document.querySelector('.js-react-app')
);
