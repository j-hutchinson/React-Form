import { shallow } from 'enzyme';
import React from 'react';
import DonePanel from './component';

describe('DonePanel component', () => {
    test('component matches snapshot', () => {
        expect.assertions(1);

        const wrapper = shallow(<DonePanel />);

        expect(wrapper).toMatchSnapshot();
    });
});
