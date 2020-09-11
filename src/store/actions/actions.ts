import { ActionType, UserSettings, PrivacySettings } from "../../types";

const UPDATE_PRIVACY = 'UPDATE_PRIVACY';
const UPDATE_USER = 'UPDATE_USER';

const updatePrivacy = (privacy: PrivacySettings): ActionType => {
  return { type: UPDATE_PRIVACY, privacy: {...privacy } };
}

const updateUser = (user: UserSettings): ActionType => {
  return { type: UPDATE_USER, user: {...user } };
}

export {
    UPDATE_PRIVACY,
    UPDATE_USER,
    updatePrivacy,
    updateUser
}