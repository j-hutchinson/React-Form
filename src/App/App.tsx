import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import FormBody from '../FormBody/component';
import FormTabs from '../FormTabs/component';
import Header from '../Header/component';
import { FormState } from '../types';

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

interface Props {
    activePage: FormState;
}

export const App = ({ activePage }: Props): JSX.Element => (
    <StyledApp>
        <Header />
        <StyledForm>
            <FormTabs activePage={activePage} />
            <FormBody activePage={activePage} />
        </StyledForm>
    </StyledApp>
);

const mapStateToProps = state => ({
    activePage: state.page
})

export default connect(mapStateToProps, null)(App);
