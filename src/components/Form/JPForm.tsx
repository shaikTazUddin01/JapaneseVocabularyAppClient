import React, { useEffect } from "react";
import {
  FormProvider,
  useForm,
} from "react-hook-form";

const JPForm = ({ onSubmit, children, defaultValues }) => {
  const formConfig = {};
  const methods = useForm(formConfig);

  useEffect(() => {
    if (defaultValues) {
      methods.reset(defaultValues);
    }
  }, [defaultValues, methods]);

  const submit = (data) => {
    onSubmit(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)} className="p-5">
        {children}
      </form>
    </FormProvider>
  );
};

export default JPForm;
