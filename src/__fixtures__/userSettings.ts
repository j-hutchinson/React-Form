import { ReduxState } from '../types';

export const userSettings: ReduxState = {
    user: {
        name: "jack hutchinson",
        title: "software engineer",
        email: "jackhutchy@hotmail.com",
        password: 'password'
    },
    privacy: {
        updates: true,
        communication: false
    }
}