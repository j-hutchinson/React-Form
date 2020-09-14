import { shallow } from 'enzyme';
import React from 'react';
import UserPanel, { StyledInput, StyledPanel, passwordValidation } from './component';
import store from '../store/store'

jest.mock('../store/store', () => ({ dispatch: jest.fn(), }));

describe('UserPanel component', () => {
    const preventDefault = jest.fn();

    afterEach(() => {
        jest.resetAllMocks();
    });

    test('component matches snapshot', () => {
        expect.assertions(1);

        const wrapper = shallow(<UserPanel />);

        expect(wrapper).toMatchSnapshot();
    });

    test('onSubmit updates the store with valid User object', () => {
        expect.assertions(3);

        const wrapper = shallow(<UserPanel />);

        wrapper.find(StyledInput).at(0).simulate('change', { target: { value: 'Jack Hutchinson' } });
        wrapper.find(StyledInput).at(1).simulate('change', { target: { value: 'Coder' } });
        wrapper.find(StyledInput).at(2).simulate('change', { target: { value: 'email@email.com' } });
        wrapper.find(StyledInput).at(3).simulate('change', { target: { value: 'ValidPassword123' } });
        wrapper.find(StyledPanel).props().onSubmit({ preventDefault });

        expect(store.dispatch).toHaveBeenCalledTimes(2);
        expect(store.dispatch).toHaveBeenCalledWith({
            user: {
                name: 'Jack Hutchinson',
                role: 'Coder',
                email: 'email@email.com',
                password: 'ValidPassword123'
            },
            type: "UPDATE_USER"
        });
        expect(store.dispatch).toHaveBeenCalledWith({ type: "NEXT_PAGE" });
    });

    test('Store is updated with missing role', () => {
        expect.assertions(3);

        const wrapper = shallow(<UserPanel />);

        wrapper.find(StyledInput).at(0).simulate('change', { target: { value: 'Jack Hutchinson' } });
        wrapper.find(StyledInput).at(1).simulate('change', { target: { value: null } });
        wrapper.find(StyledInput).at(2).simulate('change', { target: { value: 'email@email.com' } });
        wrapper.find(StyledInput).at(3).simulate('change', { target: { value: 'ValidPassword123' } });
        wrapper.find(StyledPanel).props().onSubmit({ preventDefault });

        expect(store.dispatch).toHaveBeenCalledTimes(2);
        expect(store.dispatch).toHaveBeenCalledWith({
            user: {
                name: 'Jack Hutchinson',
                role: null,
                email: 'email@email.com',
                password: 'ValidPassword123'
            },
            type: "UPDATE_USER"
        });
        expect(store.dispatch).toHaveBeenCalledWith({ type: "NEXT_PAGE" });
    });

    test('Store is not updated when password is invalid', () => {
        expect.assertions(2);

        const wrapper = shallow(<UserPanel />);

        wrapper.find(StyledInput).at(0).simulate('change', { target: { value: 'Jack Hutchinson' } });
        wrapper.find(StyledInput).at(1).simulate('change', { target: { value: 'Coder' } });
        wrapper.find(StyledInput).at(2).simulate('change', { target: { value: 'email@email.com' } });
        wrapper.find(StyledInput).at(3).simulate('change', { target: { value: 'not_valid' } });
        wrapper.find(StyledPanel).props().onSubmit({ preventDefault });

        expect(store.dispatch).toHaveBeenCalledTimes(0);
        expect(preventDefault).toHaveBeenCalledTimes(1);
    });
});

describe('Password validation checker', () => {
    test.each`
        password                                          | valid 
        ${'Password1'}                                    | ${true}        
        ${'password'}                                     | ${false}        
        ${'password1'}                                    | ${false}        
        ${'123456789'}                                    | ${false}        
        ${'Pass1'}                                        | ${false}        
        ${'PASSWORD'}                                     | ${false}        
        ${'PASSWORD123'}                                  | ${false}        
        ${'SuperComplicatedLongPasswordWithNoNumbers'}    | ${false}        
    `('passwordValidation for $password', ({ password, valid }) => {
        expect(passwordValidation(password)).toEqual(valid);
    });
});
