import { shallow } from 'enzyme';
import React from 'react';
import FormTabs, { StyledTab } from './component';
import { FormState } from '../types';

describe('FormTabs component', () => {
    test('component matches snapshot', () => {
        expect.assertions(4);

        const wrapper = shallow(<FormTabs activePage={FormState.USER} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(StyledTab).at(0).props().active).toBe(true)
        expect(wrapper.find(StyledTab).at(1).props().active).toBe(false)
        expect(wrapper.find(StyledTab).at(2).props().active).toBe(false)
    });
});
