import app from './app';

import {Home, Contact, About} from './screens';

export default {
    path: '/',
    component: app,
    indexRoute: Home,
    childRoutes: [
        About,
        Contact
    ]
};
