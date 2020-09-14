import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';
import { PanelStyles, SubmitInputStyles } from '../css/tokens';
import { nextPage, updateUser } from '../store/actions/actions';
import store from '../store/store';

export const StyledPanel = styled.form`
    ${PanelStyles}
`;

const StyledItem = styled.div`
    display: grid;
    grid-template-rows: min-content 1fr;
    grid-gap: 4px;
    margin: 10px;
`;

const StyledButtonWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin-right: 10px;
`;

const StyledAsterisk = styled.div`
    display: inline-block;
    color: red;
`;

const StyledError = styled.div`
    color: red;
    font-size: 14px;
    margin: 10px;
    font-weight: bold
`;

const StyledSubmitInput = styled.input`
   ${SubmitInputStyles};
`;

export const StyledInput = styled.input`
   height: 24px;
   font-size: 14px;
`;

/*
**  Check if password contains a digit, a lower case letter, an upper case letter, and greater than or equal to 9 characters in length
*/
export const passwordValidation = (password: string): boolean => {
    return /\d/.test(password) && /[a-z]/.test(password) && /[A-Z]/.test(password) && password.length >= 9
}

const UserPanel = (): JSX.Element => {
    const [name, setName] = useState<string>('');
    const [role, setRole] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    const onSubmission = (ev: FormEvent): void => {
        ev.preventDefault();
        if (passwordValidation(password)) {
            store.dispatch(updateUser({ name, role, email, password }));
            store.dispatch(nextPage());
        } else {
            setError(true);
        }
    }

    return (
        <StyledPanel onSubmit={onSubmission}>
            <StyledItem>
                <label htmlFor="name"> Name: <StyledAsterisk>*</StyledAsterisk> </label>
                <StyledInput id="name" type="text" value={name} onChange={(ev) => setName(ev.target.value)} required />
            </StyledItem>
            <StyledItem>
                <label htmlFor="role">Role:</label>
                <StyledInput id="role" type="text" value={role} onChange={(ev) => setRole(ev.target.value)} />
            </StyledItem>
            <StyledItem>
                <label htmlFor="email"> Email: <StyledAsterisk>*</StyledAsterisk> </label>
                <StyledInput id="email" type="email" value={email} onChange={(ev) => setEmail(ev.target.value)} required />
            </StyledItem>
            <StyledItem>
                <label htmlFor="password"> Password: <StyledAsterisk>*</StyledAsterisk> </label>
                <StyledInput id="password" type="password" value={password} onChange={(ev) => setPassword(ev.target.value)} required />
            </StyledItem>
            {error && (
                <StyledError>
                    Check your password is valid. Must contain 1 uppercase, 1 lowercase, 1 number and be longer than 9 characters
                </StyledError>
            )}
            <StyledButtonWrapper>
                <StyledSubmitInput type="submit" value="Submit" />
            </StyledButtonWrapper>
        </StyledPanel>
    )
};

export default UserPanel;