import React from 'react';
import styled from 'styled-components'
import { formTabsList, FormState } from '../types';

interface Props {
    activePage: FormState;
}
const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

export const StyledTab = styled.div<{ active: boolean }>`
    background:  ${props => (props.active ? '#42daf5' : 'white')};
    border: 1px solid black;
    padding: 10px 0;
    text-align: center;
    font-size: 20px;
`;

const FormTabs = ({ activePage }: Props): JSX.Element => (
    <StyledContainer>
        {formTabsList.map(tab =>
            <StyledTab active={activePage === tab} key={tab}>
                {tab}
            </StyledTab>
        )}
    </StyledContainer>
);

export default FormTabs;