import { shallow } from 'enzyme';
import React from 'react';
import UserPanel, { StyledPanel, passwordValidation } from './component';
import store from '../store/store'

jest.mock('../store/store', () => {
    return { dispatch: jest.fn(), }
});

describe('UserPanel component', () => {
    const onDoneClick = jest.fn();
    const preventDefault = jest.fn();

    afterEach(() => {
        jest.resetAllMocks();
    });

    test('component matches snapshot', () => {
        expect.assertions(1);

        const wrapper = shallow(<UserPanel onDoneClick={onDoneClick} />);

        expect(wrapper).toMatchSnapshot();
    });

    test('onSubmit updates the store with valid User object', () => {
        expect.assertions(3);

        const wrapper = shallow(<UserPanel onDoneClick={onDoneClick} />);

        wrapper.find('input').at(0).simulate('change', { target: { value: 'Jack Hutchinson' } });
        wrapper.find('input').at(1).simulate('change', { target: { value: 'Coder' } });
        wrapper.find('input').at(2).simulate('change', { target: { value: 'email@email.com' } });
        wrapper.find('input').at(3).simulate('change', { target: { value: 'ValidPassword123' } });
        wrapper.find(StyledPanel).props().onSubmit();

        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith({
            user: {
                name: 'Jack Hutchinson',
                role: 'Coder',
                email: 'email@email.com',
                password: 'ValidPassword123'
            },
            type: "UPDATE_USER"
        });
        expect(onDoneClick).toHaveBeenCalledTimes(1);
    });

    test('Store is updated with missing role', () => {
        expect.assertions(3);

        const wrapper = shallow(<UserPanel onDoneClick={onDoneClick} />);

        wrapper.find('input').at(0).simulate('change', { target: { value: 'Jack Hutchinson' } });
        wrapper.find('input').at(1).simulate('change', { target: { value: null } });
        wrapper.find('input').at(2).simulate('change', { target: { value: 'email@email.com' } });
        wrapper.find('input').at(3).simulate('change', { target: { value: 'ValidPassword123' } });
        wrapper.find(StyledPanel).props().onSubmit();

        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith({
            user: {
                name: 'Jack Hutchinson',
                role: null,
                email: 'email@email.com',
                password: 'ValidPassword123'
            },
            type: "UPDATE_USER"
        });
        expect(onDoneClick).toHaveBeenCalledTimes(1);
    });

    test('Store is not updated when password is invalid', () => {
        expect.assertions(3);

        const wrapper = shallow(<UserPanel onDoneClick={onDoneClick} />);

        wrapper.find('input').at(0).simulate('change', { target: { value: 'Jack Hutchinson' } });
        wrapper.find('input').at(1).simulate('change', { target: { value: 'Coder' } });
        wrapper.find('input').at(2).simulate('change', { target: { value: 'email@email.com' } });
        wrapper.find('input').at(3).simulate('change', { target: { value: 'not_valid' } });
        wrapper.find(StyledPanel).props().onSubmit({ preventDefault });

        expect(store.dispatch).toHaveBeenCalledTimes(0);
        expect(preventDefault).toHaveBeenCalledTimes(1);
        expect(onDoneClick).toHaveBeenCalledTimes(0);
    });
});

describe('Password validation checker', () => {
    test.each`
        password                                          | valid 
        ${'Password1'}                                    | ${true}        
        ${'password'}                                     | ${false}        
        ${'123456789'}                                    | ${false}        
        ${'Pass1'}                                        | ${false}        
        ${'PASSWORD'}                                     | ${false}        
        ${'PASSWORD123'}                                  | ${false}        
        ${'SuperComplicatedLongPasswordWithNoNumbers'}    | ${false}        
    `('passwordValidation for $password', ({ password, valid }) => {
        expect(passwordValidation(password)).toEqual(valid);
    });
});
