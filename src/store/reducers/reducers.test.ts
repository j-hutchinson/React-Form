import rootReducer from './reducers'
import { UPDATE_PAGE, UPDATE_PRIVACY, UPDATE_USER } from '../actions/actions';
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

    test('state is updated with UPDATE_PAGE action', () => {
        expect.assertions(1);

        const res = rootReducer(initialState, { type: UPDATE_PAGE, page: FormState.DONE });

        expect(res).toStrictEqual({ 
            page: FormState.DONE,
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
