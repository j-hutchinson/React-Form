import { ActionType, UserSettings, PrivacySettings, FormState } from "../../types";

const UPDATE_PAGE = 'UPDATE_PAGE';
const UPDATE_PRIVACY = 'UPDATE_PRIVACY';
const UPDATE_USER = 'UPDATE_USER';

const updatePage = (page: FormState): ActionType => {
    return { type: UPDATE_PAGE, page };
}

const updatePrivacy = (privacy: PrivacySettings): ActionType => {
    return { type: UPDATE_PRIVACY, privacy: {...privacy } };
}

const updateUser = (user: UserSettings): ActionType => {
    return { type: UPDATE_USER, user: {...user } };
}

export {
    UPDATE_PAGE,
    UPDATE_PRIVACY,
    UPDATE_USER,
    updatePage,
    updatePrivacy,
    updateUser
}