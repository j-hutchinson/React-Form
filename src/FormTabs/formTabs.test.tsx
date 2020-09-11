import { shallow } from 'enzyme';
import React from 'react';
import FormTabs from './component';
import { FormState } from '../types';

describe('FormTabs component', () => {
    test('component matches snapshot', () => {
        expect.assertions(1);

        const wrapper = shallow(<FormTabs activeStep={FormState.USER} />);

        expect(wrapper).toMatchSnapshot();
    });
});
