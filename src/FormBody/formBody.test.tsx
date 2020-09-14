import { shallow } from 'enzyme';
import React from 'react';
import { FormBody, mapStateToProps } from './component';
import { FormState, ReduxState } from '../types';
import DonePanel from '../DonePanel/component';
import PrivacyPanel from '../PrivacyPanel/component';
import UserPanel from '../UserPanel/component';

describe('FormBody component', () => {
    afterEach(() => {
        jest.resetAllMocks();
    })

    test.each`
        active               | component
        ${FormState.USER}    | ${UserPanel}
        ${FormState.PRIVACY} | ${PrivacyPanel}
        ${FormState.DONE}    | ${DonePanel}
    `('component matches snapshot when $active is active', ({ active, component }) => {
        expect.assertions(2);

        const wrapper = shallow(<FormBody activePage={active} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(component).length).toBe(1);
    });

    test('returns correct `props`', () => {
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
