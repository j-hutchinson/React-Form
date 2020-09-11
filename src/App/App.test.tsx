import { shallow } from 'enzyme';
import React from 'react';
import { App, mapStateToProps } from './App';
import { FormState, ReduxState } from '../types';

describe('App component', () => {
    test('component matches snapshot', () => {
        expect.assertions(1);

        const wrapper = shallow(<App activePage={FormState.USER} />);

        expect(wrapper).toMatchSnapshot();
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
