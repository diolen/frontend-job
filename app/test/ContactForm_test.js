import React from 'react';
import TestUtils from 'react-addons-test-utils';

import {Form} from '../screens/Contact/components';

var shallowRenderer = TestUtils.createRenderer();

describe('Form Default', () => {
    shallowRenderer.render(<Form status="WAITING_USER" />);

    var result = shallowRenderer.getRenderOutput();

    it('must be form', () => {
        expect(result.type).toBe('form');
    });
});

describe('Form SENDING', () => {
    shallowRenderer.render(<Form status="SENDING" />);

    var result = shallowRenderer.getRenderOutput();

    it('must be div', () => {
        expect(result.type).toBe('div');
    });

    it('deve ter classes bootstrap', () => {
        expect(result.props.className).toBe('alert alert-info');
    });
});

describe('Form DONE', () => {
    shallowRenderer.render(<Form status="DONE" />);

    var result = shallowRenderer.getRenderOutput();

    it('must be div', () => {
        expect(result.type).toBe('div');
    });

    it('must have classes bootstrap', () => {
        expect(result.props.className).toBe('alert alert-success');
    });
});

describe('Form FAILED', () => {
    shallowRenderer.render(<Form status="FAILED" />);

    var result = shallowRenderer.getRenderOutput();

    it('must be div', () => {
        expect(result.type).toBe('div');
    });

    it('must have classes bootstrap', () => {
        expect(result.props.className).toBe('alert alert-danger');
    });
});
