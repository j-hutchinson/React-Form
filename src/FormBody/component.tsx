import React from 'react';
import DonePanel from '../DonePanel/component';
import PrivacyPanel from '../PrivacyPanel/component';
import { nextPage } from '../store/actions/actions';
import store from '../store/store';
import { FormState, formItems } from '../types';
import UserPanel from '../UserPanel/component';

interface Props {
    activePage: FormState;
}

const componentMapper = {
    [FormState.USER]: <UserPanel nextPanel={() => store.dispatch(nextPage())} key={FormState.USER} />,
    [FormState.PRIVACY]: <PrivacyPanel nextPanel={() => store.dispatch(nextPage())} key={FormState.PRIVACY} />,
    [FormState.DONE]: <DonePanel key={FormState.DONE} />
}

const FormBody = ({ activePage }: Props): JSX.Element => (
    <>
        {formItems.map(item => activePage === item && componentMapper[item])}
    </>
);


export default FormBody;