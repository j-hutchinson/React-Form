
export enum FormState {
    USER = 'User',
    PRIVACY = 'Privacy',
    DONE = 'Done',
}

export interface ReduxState {
    user: UserSettings;
    privacy: PrivacySettings;
}

export interface UserSettings {
    name: string;
    title: string;
    email: string;
    password: string
}

export interface PrivacySettings {
    updates: boolean;
    communication: boolean;
}

export interface ActionType {
    type: string;
    privacy?: PrivacySettings;
    user?: UserSettings;
}