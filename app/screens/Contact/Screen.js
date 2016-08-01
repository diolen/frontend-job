import React from 'react';

import {Container} from 'app/components';

import {Form} from './components';

export default ({submitStatus}) => (
    <Container>
        <h1>Contact</h1>
        <Form status={submitStatus}>
            <div className="form-group">
                <label htmlFor="foo">Email</label>
                <input type="email" className="form-control" id="foo" placeholder="Foo" />
            </div>
            <div className="form-group">
                <label htmlFor="bar">Password</label>
                <input type="password" className="form-control" id="bar" placeholder="Bar" />
            </div>
            <div className="form-group">
                <label htmlFor="bar">Textarea</label>
                <textarea className="form-control" id="bar" placeholder="Bar" />
            </div>
        </Form>
    </Container>
);
