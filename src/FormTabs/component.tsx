import React from 'react';
import styled from 'styled-components'
import { FormState } from '../types';

interface Props {
    activeStep: FormState;
}

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

const StyledTab = styled.div<{ active: boolean }>`
    background:  ${props => (props.active ? '#42daf5' : 'white')};
    border: 1px solid black;
    padding: 10px 0;
    text-align: center;
    font-size: 20px;
`;

const FormTabs = ({ activeStep }: Props): JSX.Element => (
    <StyledContainer>
        <StyledTab active={activeStep === FormState.USER}>
            {FormState.USER}
        </StyledTab>
        <StyledTab active={activeStep === FormState.PRIVACY}>
            {FormState.PRIVACY}
        </StyledTab>
        <StyledTab active={activeStep === FormState.DONE}>
            {FormState.DONE}
        </StyledTab>
    </StyledContainer>
);

export default FormTabs;