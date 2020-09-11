import React from 'react';
import DonePanel from '../DonePanel/component';
import PrivacyPanel from '../PrivacyPanel/component';
import { updatePage } from '../store/actions/actions';
import store from '../store/store';
import { FormState, formItems } from '../types';
import UserPanel from '../UserPanel/component';

interface Props {
    activePage: FormState;
}

const componentMapper = {
    [FormState.USER]: <UserPanel nextPanel={() => store.dispatch(updatePage(FormState.PRIVACY))} key={FormState.USER} />,
    [FormState.PRIVACY]: <PrivacyPanel nextPanel={() => store.dispatch(updatePage(FormState.DONE))} key={FormState.PRIVACY} />,
    [FormState.DONE]: <DonePanel key={FormState.DONE} />
}

const FormBody = ({ activePage }: Props): JSX.Element => (
    <>
        {formItems.map(item => activePage === item && componentMapper[item])}
    </>
);


export default FormBody;