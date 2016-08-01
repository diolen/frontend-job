import AltContainer from 'alt-container';
import React from 'react';
import Store from 'app/flux/Store';
import Screen from './Screen';

export default {
    path: 'contact',
    component: (props) => <AltContainer store={Store} component={Screen} inject={props} />
};
