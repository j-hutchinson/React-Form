import { shallow } from 'enzyme';
import React from 'react';
import PrivacyPanel, { StyledBox, StyledPanel } from './component';
import store from '../store/store'

jest.mock('../store/store', () => ({ dispatch: jest.fn(), }));

describe('PrivacyPanel component', () => {
    const nextPanel = jest.fn();
    const preventDefault = jest.fn();

    afterEach(() => {
        jest.resetAllMocks();
    })

    test('component matches snapshot', () => {
        expect.assertions(1);

        const wrapper = shallow(<PrivacyPanel nextPanel={nextPanel} />);

        expect(wrapper).toMatchSnapshot();
    });

    test('onSubmit updates the store with correct Privacy object', () => {
        expect.assertions(3);

        const wrapper = shallow(<PrivacyPanel nextPanel={nextPanel} />);
        wrapper.find(StyledBox).at(0).simulate('click');
        wrapper.find(StyledPanel).props().onSubmit({ preventDefault });

        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith({ privacy: { communication: false, updates: true }, type: "UPDATE_PRIVACY" });
        expect(nextPanel).toHaveBeenCalledTimes(1);
    });

    test('Enter onKeyDown updates the selected field', () => {
        expect.assertions(3);

        const wrapper = shallow(<PrivacyPanel nextPanel={nextPanel} />);
        wrapper.find(StyledBox).at(0).simulate('keyDown', { keyCode: 13 });
        wrapper.find(StyledPanel).props().onSubmit({ preventDefault });

        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith({ privacy: { communication: false, updates: true }, type: "UPDATE_PRIVACY" });
        expect(nextPanel).toHaveBeenCalledTimes(1);
    });

    test('Other onKeyDown do not update the selected field', () => {
        expect.assertions(3);

        const wrapper = shallow(<PrivacyPanel nextPanel={nextPanel} />);
        wrapper.find(StyledBox).at(0).simulate('keyDown', { keyCode: 27 });
        wrapper.find(StyledPanel).props().onSubmit({ preventDefault });

        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith({ privacy: { communication: false, updates: false }, type: "UPDATE_PRIVACY" });
        expect(nextPanel).toHaveBeenCalledTimes(1);
    });
});
