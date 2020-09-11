import { shallow } from 'enzyme';
import React from 'react';
import Header from './component';

describe('Header component', () => {
    test('component matches snapshot', () => {
        expect.assertions(1);

        const wrapper = shallow(<Header />);

        expect(wrapper).toMatchSnapshot();
    });
});
