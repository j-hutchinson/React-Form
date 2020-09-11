import React, { useState } from 'react';
import styled from 'styled-components';
import { PanelStyles } from '../css/tokens'
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
    background-color: white;
    display: flex;

    :hover {
        border-color: #007398;
    }
`;

const StyledButtonWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin-right: 10px;
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
            <div>
                <StyledBox onClick={() => setUpdates(!activeUpdates)}>{activeUpdates && <ConfirmIcon />}</StyledBox>
                Receive updates about Tray.io product by email
            </div>
            <div>
                <StyledBox onClick={() => setComms(!activeComms)}>{activeComms && <ConfirmIcon />}</StyledBox>
                Receive communcations by email from other products created by the Tray.io team
            </div>
            <StyledButtonWrapper>
                <input type="submit" value="Submit" />
            </StyledButtonWrapper>
        </StyledPanel>
    );
}

export default PrivacyPanel;