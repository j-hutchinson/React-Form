
export enum FormState {
    USER = 'User',
    PRIVACY = 'Privacy',
    DONE = 'Done',
}

export const formTabsList = [FormState.USER, FormState.PRIVACY, FormState.DONE]

export interface ReduxState {
    user: UserSettings;
    privacy: PrivacySettings;
    page: FormState
}

export interface UserSettings {
    name: string;
    role: string;
    email: string;
    password: string
}

export interface PrivacySettings {
    updates: boolean;
    communication: boolean;
}

export interface ActionType {
    type: string;
    page?: FormState;
    privacy?: PrivacySettings;
    user?: UserSettings;
}