import React, { useState } from 'react';
import styled from 'styled-components';
import { PanelStyles, SubmitInputStyles } from '../css/tokens'
import store from '../store/store'
import { updateUser } from '../store/actions/actions';

interface Props {
    onDoneClick: () => void;
}

export const StyledPanel = styled.form`
    ${PanelStyles}
`;

const StyledLabel = styled.label`
    display: grid;
    grid-template-columns: 100px 1fr;
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
    font-size: 12px;
    margin: 10px;
`;

const StyledSubmitInput = styled.input`
   ${SubmitInputStyles};
`;

export const passwordValidation = (password: string): boolean => {
    return /\d/.test(password) && /[a-z]/.test(password) && /[A-Z]/.test(password) && password.length >= 9
}

const UserPanel = ({ onDoneClick }: Props): JSX.Element => {
    const [name, setName] = useState<string>('');
    const [role, setRole] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    const onSubmission = (ev) => {
        if (passwordValidation(password)) {
            store.dispatch(updateUser({ name, role, email, password }));
            onDoneClick();
        } else {
            ev.preventDefault();
            setError(true);
        }
    }

    return (
        <StyledPanel onSubmit={onSubmission}>
            <StyledLabel>
                <div> Name: <StyledAsterisk>*</StyledAsterisk> </div>
                <input type="text" value={name} onChange={(ev) => setName(ev.target.value)} required />
            </StyledLabel>
            <StyledLabel>
                Role:
                <input type="text" value={role} onChange={(ev) => setRole(ev.target.value)} />
            </StyledLabel>
            <StyledLabel>
                <div> Email: <StyledAsterisk>*</StyledAsterisk> </div>
                <input type="email" value={email} onChange={(ev) => setEmail(ev.target.value)} required />
            </StyledLabel>
            <StyledLabel>
                <div> Password: <StyledAsterisk>*</StyledAsterisk> </div>
                <input type="password" value={password} onChange={(ev) => setPassword(ev.target.value)} required />
            </StyledLabel>
            {error && (
                <StyledError>Check your password is valid. Must contain 1 uppercase, 1 lowercase, 1 number and be longer than 9 characters</StyledError>
            )}
            <StyledButtonWrapper>
                <StyledSubmitInput type="submit" value="Submit" />
            </StyledButtonWrapper>

        </StyledPanel>
    )
};

export default UserPanel;