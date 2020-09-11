import React, { useState } from 'react';
import styled from 'styled-components';

import FormBody from '../FormBody/component';
import FormTabs from '../FormTabs/component';
import { FormState } from '../types'

const StyledApp = styled.div`
   display: flex;
   margin-top: 100px;
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
