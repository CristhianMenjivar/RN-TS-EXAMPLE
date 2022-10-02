import {useMemo, useState} from 'react';

type Props = {
  totalStep: number;
  minStep: number;
};

const initialState: Props = {
  totalStep: 1,
  minStep: 1,
};

const useStepTab = (
  {totalStep, minStep}: Props = {
    ...initialState,
  },
) => {
  const [step, setStep] = useState(0);

  const havePrev = useMemo(() => step > minStep, [minStep, step]);

  const haveNext = useMemo(() => totalStep > step, [totalStep, step]);

  const handlerNextStep = () => {
    if (haveNext) {
      setStep(step + 1);
    }
  };

  const handlerPrevStep = () => {
    if (havePrev) {
      setStep(step - 1);
    }
  };

  const handlerSetStep = (value: number) => setStep(value);

  const resetSteps = () => setStep(1);

  const isFinishStep = useMemo(() => {
    return step === totalStep;
  }, [step, totalStep]);

  return {
    step,
    isFinishStep,
    havePrev,
    haveNext,
    setStep: handlerSetStep,
    nextStep: handlerNextStep,
    prevStep: handlerPrevStep,
    resetSteps,
  };
};

export default useStepTab;
