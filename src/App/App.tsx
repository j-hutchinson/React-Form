import React from 'react';
import styled from 'styled-components';
import FormBody from '../FormBody/component';
import FormTabs from '../FormTabs/component';
import Header from '../Header/component';

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

const App = (): JSX.Element => (
    <StyledApp>
        <Header />
        <StyledForm>
            <FormTabs />
            <FormBody />
        </StyledForm>
    </StyledApp>
);


export default App;
