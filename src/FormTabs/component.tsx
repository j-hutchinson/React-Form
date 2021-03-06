import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FormState, formItems, ReduxState } from '../types';

interface Props {
    activePage: FormState;
}

interface TabProps {
    active: boolean;
}

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(${formItems.length}, 1fr);
`;

const StyledTab = styled.div<TabProps>`
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

const mapStateToProps = (state: ReduxState): Props => ({
    activePage: state.page
});

const ReduxFormTabs = connect(mapStateToProps, null)(FormTabs);
export default ReduxFormTabs;

// test exports 
export {
    mapStateToProps,
    StyledTab,
    FormTabs
}