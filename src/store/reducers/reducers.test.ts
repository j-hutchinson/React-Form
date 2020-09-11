import rootReducer from './reducers'
import { UPDATE_PRIVACY, UPDATE_USER } from '../actions/actions';

describe('actions', () => {
    const initialState = {
        user: {
            name: null,
            title: null,
            email: null,
            password: null,
        },
        privacy: {
            updates: false,
            communication: false,
        }
    };

    test('state is updated with UPDATE_PRIVACY action', () => {
        expect.assertions(1);

        const res = rootReducer(initialState, {type: UPDATE_PRIVACY, privacy: { updates: true, communication: true }});

        expect(res).toStrictEqual({ 
            user: {
                name: null,
                title: null,
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

        const res = rootReducer(initialState, { type: UPDATE_USER, user: { name: 'Billy', title: "Coder", email: 'email@hotmail.com', password: 'password123' }});

        expect(res).toStrictEqual({ 
            user: {
                name: 'Billy',
                title: 'Coder',
                email: 'email@hotmail.com',
                password: 'password123',
            },
            privacy: {
                updates: false,
                communication: false,
        }});
    });
});
