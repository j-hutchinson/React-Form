import { shallow } from 'enzyme';
import React from 'react';
import PrivacyPanel, { StyledBox, StyledPanel } from './component';
import store from '../store/store'

jest.mock('../store/store', () => {
    return { dispatch: jest.fn(), }
})

describe('PrivacyPanel component', () => {
    const onDoneClick = jest.fn();

    afterEach(() => {
        jest.resetAllMocks();
    })

    test('component matches snapshot', () => {
        expect.assertions(1);

        const wrapper = shallow(<PrivacyPanel onDoneClick={onDoneClick} />);

        expect(wrapper).toMatchSnapshot();
    });

    test('onSubmit updates the store with correct Privacy object', () => {
        expect.assertions(3);

        const wrapper = shallow(<PrivacyPanel onDoneClick={onDoneClick} />);
        wrapper.find(StyledBox).at(0).simulate('click');
        wrapper.find(StyledPanel).props().onSubmit();

        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith({ privacy: { communication: false, updates: true }, type: "UPDATE_PRIVACY" });
        expect(onDoneClick).toHaveBeenCalledTimes(1);
    });
});