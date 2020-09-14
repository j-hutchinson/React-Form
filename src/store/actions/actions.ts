import { ActionType, UserSettings, PrivacySettings } from '../../types';

const NEXT_PAGE = 'NEXT_PAGE';
const UPDATE_PRIVACY = 'UPDATE_PRIVACY';
const UPDATE_USER = 'UPDATE_USER';

const nextPage = (): ActionType => {
    return { type: NEXT_PAGE };
};

const updatePrivacy = (privacy: PrivacySettings): ActionType => {
    return { type: UPDATE_PRIVACY, privacy: { ...privacy } };
};

const updateUser = (user: UserSettings): ActionType => {
    return { type: UPDATE_USER, user: { ...user } };
};

export { NEXT_PAGE, UPDATE_PRIVACY, UPDATE_USER, nextPage, updatePrivacy, updateUser };
