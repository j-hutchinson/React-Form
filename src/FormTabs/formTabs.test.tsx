import { shallow } from 'enzyme';
import React from 'react';
import { FormTabs, StyledTab, mapStateToProps } from './component';
import { FormState, ReduxState } from '../types';

describe('FormTabs component', () => {
    test('component matches snapshot on User panel', () => {
        expect.assertions(4);

        const wrapper = shallow(<FormTabs activePage={FormState.USER} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(StyledTab).at(0).props().active).toBe(true)
        expect(wrapper.find(StyledTab).at(1).props().active).toBe(false)
        expect(wrapper.find(StyledTab).at(2).props().active).toBe(false)
    });

    test('component matches snapshot on Privacy panel', () => {
        expect.assertions(4);

        const wrapper = shallow(<FormTabs activePage={FormState.PRIVACY} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(StyledTab).at(0).props().active).toBe(false)
        expect(wrapper.find(StyledTab).at(1).props().active).toBe(true)
        expect(wrapper.find(StyledTab).at(2).props().active).toBe(false)
    });

    test('`mapStateToProps` returns correct `props`', () => {
        expect.assertions(1);

        const state = {
            page: FormState.PRIVACY,
            privacy: {
                updates: false, communication: true,
            },
            user: {
                name: null,
                role: null,
                email: null,
                password: null,
            },
        } as ReduxState;

        const props = mapStateToProps(state);

        expect(props).toEqual({ activePage: FormState.PRIVACY });
    });
});
