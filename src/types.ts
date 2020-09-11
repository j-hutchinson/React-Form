export enum FormState {
    USER = 'User',
    PRIVACY = 'Privacy',
    DONE = 'Done',
}

export const formItems = [FormState.USER, FormState.PRIVACY, FormState.DONE];

export interface ActionType {
    type: string;
    page?: FormState;
    privacy?: PrivacySettings;
    user?: UserSettings;
}

export interface ReduxState {
    page: FormState
    user: UserSettings;
    privacy: PrivacySettings;
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
