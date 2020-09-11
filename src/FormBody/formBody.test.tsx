import { shallow } from 'enzyme';
import React from 'react';
import FormBody from './component';
import { FormState } from '../types';
import DonePanel from '../DonePanel/component';
import PrivacyPanel from '../PrivacyPanel/component';
import UserPanel from '../UserPanel/component';
import store from '../store/store'

jest.mock('../store/store', () => {
    return { dispatch: jest.fn() }
});

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

    test.each`
        active               | component       | dispatched
        ${FormState.USER}    | ${UserPanel}    | ${{ page: "Privacy", type: "UPDATE_PAGE" }}
        ${FormState.PRIVACY} | ${PrivacyPanel} | ${{ page: "Done", type: "UPDATE_PAGE" }}
    `('$active onDoneClick triggers next active panel', ({ active, component, dispatched }) => {
        expect.assertions(2);

        const wrapper = shallow(<FormBody activePage={active} />);
        wrapper.find(component).props().onDoneClick();

        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(dispatched);
    });
});
