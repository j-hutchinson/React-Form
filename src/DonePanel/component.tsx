import React from 'react';
import styled from 'styled-components';
import { PanelStyles } from '../css/tokens'
import store from '../store/store'

const StyledPanel = styled.div`
    ${PanelStyles}
`;

const DonePanel = (): JSX.Element => {
    const state = store.getState();
    console.log(state.user, state.privacy);

    return (
        <StyledPanel>
            Please verify your email address, you should have received an email from us today
        </StyledPanel>
    );
}

export default DonePanel;