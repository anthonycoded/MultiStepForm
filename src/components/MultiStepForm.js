import React, { useState } from "react";

import StepOne from "../components/MultiStepForm/StepOne";
import StepTwo from "../components/MultiStepForm/StepTwo";
import StepThree from "../components/MultiStepForm/StepThree";
import StepFour from "../components/MultiStepForm/StepFour";
import BackButton from "../components/MultiStepForm/BackButton";
import CancelButton from "../components/MultiStepForm/CancelButton";
import NextButton from "../components/MultiStepForm/NextButton";

const MultiStepForm = ({ open, setOpen }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const submit = () => {
    setStep(1);
    setOpen(false);
  };

  const SubmitButton = () => (
    <button
      onClick={() => submit()}
      className="rounded-full bg-green-500 h-8 w-20"
    >
      Submit
    </button>
  );

  if (open === false) {
    return null;
  }

  return (
    <div className="bg-gray-500 bg-opacity-75 h-screen w-full p-4 absolute top-2 flex flex-col justify-center items-center">
      <div className="bg-white rounded-xl h-96 w-full p-8">
        <p className="text-3xl font-bold ">Multi Step Form</p>
        <div className="h-5/6">
          {step === 1 ? (
            <StepOne></StepOne>
          ) : step === 2 ? (
            <StepTwo></StepTwo>
          ) : step === 3 ? (
            <StepThree></StepThree>
          ) : (
            <StepFour></StepFour>
          )}
        </div>

        <div className="flex justify-end items-end space-x-6">
          {step === 1 ? (
            <React.Fragment>
              <CancelButton setOpen={setOpen}></CancelButton>
              <NextButton nextStep={nextStep}></NextButton>
            </React.Fragment>
          ) : step === 2 || step == 3 ? (
            <React.Fragment>
              <BackButton prevStep={prevStep}></BackButton>
              <NextButton nextStep={nextStep}></NextButton>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <BackButton prevStep={prevStep}></BackButton>
              <SubmitButton></SubmitButton>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
