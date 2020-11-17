import * as React from "react";
import { Formik, FormikHelpers } from "formik";
import { Input, FormControl, FormLabel, FormHelperText, FormErrorMessage } from "@chakra-ui/core";

export interface IFormData {
  email: string;
}

export interface IFormProps {
  onSubmit(values: IFormData): void | Promise<void>;
}

export const Form: React.FC<IFormProps> = (props) => {
  const onSubmit = React.useCallback(async (values: IFormData, formikHelpers: FormikHelpers<IFormData>) => {
    await props.onSubmit(values);
    formikHelpers.setSubmitting(false);
  }, [props.onSubmit]);

  return (
    <Formik<IFormData>
      initialValues={{
        email: ""
      }}
      onSubmit={onSubmit}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values
      }) => {
        return (
          <form
            onSubmit={handleSubmit}
          >
            <FormControl>
              <FormLabel htmlFor="user_email">Email</FormLabel>
              <Input
                id="user_email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder={"Email"}
                aria-describedby="user_email_help"
              />
              <FormHelperText id="user_email_help">
                Type your email here
              </FormHelperText>
            </FormControl>
          </form>
        );
      }}
    </Formik>
  );
}