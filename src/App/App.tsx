import React, { useState } from 'react';
import styled from 'styled-components';

import FormBody from '../FormBody/component';
import FormTabs from '../FormTabs/component';
import Header from '../Header/component';
import { FormState } from '../types'

const StyledApp = styled.div`
   display: grid;
   grid-template-rows: min-content 1fr;
   grid-gap: 20px;
`;

const StyledForm = styled.div`
   display: flex;
   flex-direction: column;
   width: 600px;
   margin: auto;
`;

const App = (): JSX.Element => {
    const [activeStep, setActiveStep] = useState<FormState>(FormState.USER);

    return (
        <StyledApp>
            <Header />
            <StyledForm>
                <FormTabs activeStep={activeStep} />
                <FormBody
                    activeStep={activeStep}
                    setActiveStep={setActiveStep}
                />
            </StyledForm>
        </StyledApp>
    );
};

export default App;
