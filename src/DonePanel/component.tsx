import React from 'react';
import styled from 'styled-components';
import { PanelStyles } from '../css/tokens';
import store from '../store/store';

const StyledPanel = styled.div`
    ${PanelStyles};
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const StyledTickContainer = styled.div`
    margin: auto;
    padding-bottom: 8px;
`;

const TickIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
        <path d="M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z" />
    </svg>
);

const DonePanel = (): JSX.Element => {
    const state = store.getState();
    console.log(state.user, state.privacy);

    return (
        <StyledPanel>
            <StyledTickContainer>
                <TickIcon />
            </StyledTickContainer>
            Please verify your email address, you should have received an email from us today
        </StyledPanel>
    );
}

export default DonePanel;