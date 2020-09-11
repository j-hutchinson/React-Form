import React from 'react';
import DonePanel from '../DonePanel/component';
import PrivacyPanel from '../PrivacyPanel/component';
import UserPanel from '../UserPanel/component';
import { FormState } from '../types';

interface Props {
    activeStep: FormState;
    setActiveStep: (key: FormState) => void;
}

const FormBody = ({ activeStep, setActiveStep }: Props): JSX.Element => (
    <div>
        {activeStep === FormState.USER && (
            <UserPanel onDoneClick={() => setActiveStep(FormState.PRIVACY)} />
        )}
        {activeStep === FormState.PRIVACY && (
            <PrivacyPanel onDoneClick={() => setActiveStep(FormState.DONE)} />
        )}
        {activeStep === FormState.DONE && <DonePanel />}
    </div>
)


export default FormBody;