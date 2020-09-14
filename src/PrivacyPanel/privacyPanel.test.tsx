import { shallow } from 'enzyme';
import React from 'react';
import PrivacyPanel, { StyledBox, StyledPanel } from './component';
import store from '../store/store'

jest.mock('../store/store', () => ({ dispatch: jest.fn(), }));

describe('PrivacyPanel component', () => {
    const preventDefault = jest.fn();

    afterEach(() => {
        jest.resetAllMocks();
    })

    test('component matches snapshot', () => {
        expect.assertions(1);

        const wrapper = shallow(<PrivacyPanel />);

        expect(wrapper).toMatchSnapshot();
    });

    test('onSubmit updates the store with correct Privacy object', () => {
        expect.assertions(3);

        const wrapper = shallow(<PrivacyPanel />);
        wrapper.find(StyledBox).at(0).simulate('click');
        wrapper.find(StyledPanel).props().onSubmit({ preventDefault });

        expect(store.dispatch).toHaveBeenCalledTimes(2);
        expect(store.dispatch).toHaveBeenCalledWith({ privacy: { communication: false, updates: true }, type: "UPDATE_PRIVACY" });
        expect(store.dispatch).toHaveBeenCalledWith({ type: "NEXT_PAGE" });
    });

    test('Enter onKeyDown updates the selected field', () => {
        expect.assertions(3);

        const wrapper = shallow(<PrivacyPanel />);
        wrapper.find(StyledBox).at(0).simulate('keyDown', { key: 'Enter' });
        wrapper.find(StyledPanel).props().onSubmit({ preventDefault });

        expect(store.dispatch).toHaveBeenCalledTimes(2);
        expect(store.dispatch).toHaveBeenCalledWith({ privacy: { communication: false, updates: true }, type: "UPDATE_PRIVACY" });
        expect(store.dispatch).toHaveBeenCalledWith({ type: "NEXT_PAGE" });
    });

    test('Other onKeyDown do not update the selected field', () => {
        expect.assertions(3);

        const wrapper = shallow(<PrivacyPanel />);
        wrapper.find(StyledBox).at(0).simulate('keyDown', { key: 'Escape' });
        wrapper.find(StyledPanel).props().onSubmit({ preventDefault });

        expect(store.dispatch).toHaveBeenCalledTimes(2);
        expect(store.dispatch).toHaveBeenCalledWith({ privacy: { communication: false, updates: false }, type: "UPDATE_PRIVACY" });
        expect(store.dispatch).toHaveBeenCalledWith({ type: "NEXT_PAGE" });
    });
});
