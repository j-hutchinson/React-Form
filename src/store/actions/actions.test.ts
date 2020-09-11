import { updatePage, updatePrivacy, updateUser } from './actions'
import { FormState } from '../../types';

describe('actions', () => {
    test('updatePage', () => {
        expect.assertions(1);

        const res = updatePage(FormState.DONE);

        expect(res).toStrictEqual({ 
            type: "UPDATE_PAGE",
            page: FormState.DONE
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
