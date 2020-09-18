import React from 'react';
import { connect } from 'react-redux';
import DonePanel from '../DonePanel/component';
import PrivacyPanel from '../PrivacyPanel/component';
import { FormState, ReduxState } from '../types';
import UserPanel from '../UserPanel/component';

interface Props {
    activePage: FormState;
}

const componentMapper = {
    [FormState.USER]: <UserPanel key={FormState.USER} />,
    [FormState.PRIVACY]: <PrivacyPanel key={FormState.PRIVACY} />,
    [FormState.DONE]: <DonePanel key={FormState.DONE} />
}

export const FormBody = ({ activePage }: Props): JSX.Element => componentMapper[activePage];

export const mapStateToProps = (state: ReduxState): Props => ({
    activePage: state.page
})

export default connect(mapStateToProps, null)(FormBody);