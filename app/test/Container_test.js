import React from 'react';
import TestUtils from 'react-addons-test-utils';

import {Container} from '../components';

var shallowRenderer = TestUtils.createRenderer();

shallowRenderer.render(
    <Container>
        <div>Teste</div>
    </Container>
);

var result = shallowRenderer.getRenderOutput();

describe('Container', () => {
    it('must be div', () => {
        expect(result.type).toBe('div');
    });

    it('must have className container', () => {
        expect(result.props.className).toBe('container');
    });
});

describe('Container children', () => {
    it('it should not have style', () => {
        expect(result.props.children.props.style).toBeUndefined();
    });
});

describe('Container children of children', () => {
    it('must be div', () => {
        expect(result.props.children.props.children.type).toBe('div');
    });

    it('must have content Teste', () => {
        expect(result.props.children.props.children.props.children).toBe('Teste');
    });
});
