import React, { useState } from 'react';
import styled from 'styled-components';
import { PanelStyles, SubmitInputStyles } from '../css/tokens'
import store from '../store/store'
import { updatePrivacy } from '../store/actions/actions';

interface Props {
    onDoneClick: () => void;
}

export const StyledPanel = styled.form`
    ${PanelStyles};
`;

export const StyledBox = styled.div`
    height: 20px;
    width: 20px;
    border: 1px solid #B9B9B9;
    border-radius: 1px;
    padding: 4px 0 4px 2px;
    color: #737373;
    display: inline-block;
    margin-right: 8px;

    :hover {
        border-color: #007398;
    }
`;

const StyledButtonWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin-right: 10px;
`;

const StyledBoxContainer = styled.div`
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-grap: 8px;
    margin-bottom: 8px
`;


const StyledSubmitInput = styled.input`
   ${SubmitInputStyles};
`;

const ConfirmIcon = () => (
    <svg width="14px" height="10px" viewBox="0 0 10 8">
        <path fill="currentColor" d="M8.8 0L10 1.1 3.4 7.7 0 4.3l1.1-1.1 2.3 2.2z" />
    </svg>
);

const PrivacyPanel = ({ onDoneClick }: Props): JSX.Element => {
    const [activeUpdates, setUpdates] = useState<boolean>(false);
    const [activeComms, setComms] = useState<boolean>(false);

    const onSubmit = () => {
        store.dispatch(updatePrivacy({ updates: activeUpdates, communication: activeComms }));
        onDoneClick();
    }

    return (
        <StyledPanel onSubmit={onSubmit}>
            <StyledBoxContainer>
                <StyledBox tabIndex={0} onClick={() => setUpdates(!activeUpdates)}>{activeUpdates && <ConfirmIcon />}</StyledBox>
                Receive updates about Tray.io product by email
            </StyledBoxContainer>
            <StyledBoxContainer>
                <StyledBox tabIndex={0} onClick={() => setComms(!activeComms)}>{activeComms && <ConfirmIcon />}</StyledBox>
                Receive communcations by email from other products created by the Tray.io team
            </StyledBoxContainer>
            <StyledButtonWrapper>
                <StyledSubmitInput type="submit" value="Submit" />
            </StyledButtonWrapper>
        </StyledPanel>
    );
}

export default PrivacyPanel;