import React from 'react';
import styled from 'styled-components';
import { FormState, formItems } from '../types';

interface Props {
    activePage: FormState;
}

interface TabProps {
    active: boolean;
}

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

export const StyledTab = styled.div<TabProps>`
    background:  ${props => (props.active ? '#42daf5' : 'white')};
    font-weight:  ${props => (props.active ? 'bold' : 'normal')};
    border: 1px solid black;
    padding: 10px 0;
    text-align: center;
    font-size: 20px;
`;

const FormTabs = ({ activePage }: Props): JSX.Element => (
    <StyledContainer>
        {formItems.map(tab =>
            <StyledTab active={activePage === tab} key={tab}>
                {tab}
            </StyledTab>
        )}
    </StyledContainer>
);

export default FormTabs;