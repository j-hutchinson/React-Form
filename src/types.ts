export enum FormState {
    USER = 'User',
    PRIVACY = 'Privacy',
    DONE = 'Done',
}

export const formItems = [FormState.USER, FormState.PRIVACY, FormState.DONE];

export interface ActionType {
    type: string;
    privacy?: PrivacySettings;
    user?: UserSettings;
}

export interface ReduxState {
    page: FormState;
    user: UserSettings;
    privacy: PrivacySettings;
}

export interface UserSettings {
    name: string | null;
    role: string | null;
    email: string | null;
    password: string | null;
}

export interface PrivacySettings {
    updates: boolean;
    communication: boolean;
}
