import { nextPage, updatePrivacy, updateUser } from './actions'

describe('actions', () => {
    test('nextPage', () => {
        expect.assertions(1);

        const res = nextPage();

        expect(res).toStrictEqual({ 
            type: "NEXT_PAGE",
        });
    });
    test('updatePrivacy', () => {
        expect.assertions(1);

        const res = updatePrivacy({ updates: true, communication: false });

        expect(res).toStrictEqual({ 
            type: "UPDATE_PRIVACY",
            privacy: {
                communication: false,
                updates: true,
        }});
    });
    test('updateUser', () => {
        expect.assertions(1);

        const res = updateUser({ name: 'Billy', role: "Coder", email: 'email@hotmail.com', password: 'password123' });

        expect(res).toStrictEqual({ 
            type: "UPDATE_USER",
            user: {
                name: 'Billy',
                role: 'Coder',
                email: 'email@hotmail.com',
                password: 'password123',
        }});
    });
});
