import React from 'react';
import DonePanel from '../DonePanel/component';
import PrivacyPanel from '../PrivacyPanel/component';
import UserPanel from '../UserPanel/component';
import { FormState } from '../types';
import store from '../store/store';
import { updatePage } from '../store/actions/actions';

interface Props {
    activePage: FormState;
}

const FormBody = ({ activePage }: Props): JSX.Element => (
    <div>
        {activePage === FormState.USER && (
            <UserPanel onDoneClick={() => store.dispatch(updatePage(FormState.PRIVACY))} />
        )}
        {activePage === FormState.PRIVACY && (
            <PrivacyPanel onDoneClick={() => store.dispatch(updatePage(FormState.DONE))} />
        )}
        {activePage === FormState.DONE && <DonePanel />}
    </div>
)


export default FormBody;