import { shallow } from 'enzyme';
import React from 'react';
import { App } from './App';
import { FormState } from '../types';

describe('App component', () => {
    test('component matches snapshot', () => {
        expect.assertions(1);

        const wrapper = shallow(<App activePage={FormState.User} />);

        expect(wrapper).toMatchSnapshot();
    });
});
