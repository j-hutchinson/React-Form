import rootReducer from './reducers'
import { NEXT_PAGE, UPDATE_PRIVACY, UPDATE_USER } from '../actions/actions';
import { FormState } from '../../types';

describe('actions', () => {
    const initialState = {
        page: FormState.USER,
        user: {
            name: null,
            role: null,
            email: null,
            password: null,
        },
        privacy: {
            updates: false,
            communication: false,
        }
    };

    test('state is updated with NEXT_PAGE action', () => {
        expect.assertions(1);

        const res = rootReducer(initialState, { type: NEXT_PAGE });

        expect(res).toStrictEqual({ 
            page: FormState.PRIVACY,
            user: {
                name: null,
                role: null,
                email: null,
                password: null,
            },
            privacy: {
                updates: false,
                communication: false,
        }});
    });

    test('state is updated with UPDATE_PRIVACY action', () => {
        expect.assertions(1);

        const res = rootReducer(initialState, { type: UPDATE_PRIVACY, privacy: { updates: true, communication: true }});

        expect(res).toStrictEqual({ 
            page: FormState.USER,
            user: {
                name: null,
                role: null,
                email: null,
                password: null,
            },
            privacy: {
                updates: true,
                communication: true,
        }});
    });

    test('state is updated with UPDATE_USER action', () => {
        expect.assertions(1);

        const res = rootReducer(initialState, { type: UPDATE_USER, user: { name: 'Billy', role: "Coder", email: 'email@hotmail.com', password: 'password123' }});

        expect(res).toStrictEqual({ 
            page: FormState.USER,
            user: {
                name: 'Billy',
                role: 'Coder',
                email: 'email@hotmail.com',
                password: 'password123',
            },
            privacy: {
                updates: false,
                communication: false,
        }});
    });
});
