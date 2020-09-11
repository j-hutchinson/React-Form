import { shallow } from 'enzyme';
import React from 'react';
import FormBody from './component';
import { FormState } from '../types';
import DonePanel from '../DonePanel/component';
import PrivacyPanel from '../PrivacyPanel/component';
import UserPanel from '../UserPanel/component';

describe('FormBody component', () => {
    const setActiveStep = jest.fn();

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

        const wrapper = shallow(<FormBody activeStep={active} setActiveStep={setActiveStep} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(component).length).toBe(1);
    });

    test.each`
        active               | component       | nextState
        ${FormState.USER}    | ${UserPanel}    | ${FormState.PRIVACY}
        ${FormState.PRIVACY} | ${PrivacyPanel} | ${FormState.DONE}
    `('$active onDoneClick triggers next active panel', ({ active, component, nextState }) => {
        expect.assertions(2);

        const wrapper = shallow(<FormBody activeStep={active} setActiveStep={setActiveStep} />);
        wrapper.find(component).props().onDoneClick();

        expect(setActiveStep).toHaveBeenCalledTimes(1);
        expect(setActiveStep).toHaveBeenCalledWith(nextState);
    });


});
