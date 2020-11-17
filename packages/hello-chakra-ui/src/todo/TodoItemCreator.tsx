import { FormControl, FormLabel, Input } from "@chakra-ui/core";
import { Formik, FormikHelpers } from "formik";
import * as React from "react";
import { useMutation } from "relay-hooks";
import { graphql } from "react-relay";
import { TodoItemCreator_Mutation } from "./__generated__/TodoItemCreator_Mutation.graphql";

interface IFormData {
  todo: string;
}

export const TodoItemCreator: React.FC = () => {
  const [mutate] = useMutation<TodoItemCreator_Mutation>(
    graphql`
      mutation TodoItemCreator_Mutation($input: CreateTodoInput!) {
          createTodo(input: $input) {
            id
            title
          }
      }
    `
  )

  const addTodo = (values: IFormData, formikHelpers: FormikHelpers<IFormData>) => {
    mutate({
      variables: {
        input: {
          title: values.todo
        }
      }
    })
    .then(() => {
      formikHelpers.resetForm();
    })
    .finally(() => {
      formikHelpers.setSubmitting(false);
    });
  };

  return (
    <Formik<IFormData>
      initialValues={{
        todo: ""
      }}
      onSubmit={addTodo}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values
       }) => (
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel htmlFor="todo">Todo</FormLabel>
            <Input
              id="todo"
              name="todo"
              value={values.todo}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormControl>
        </form>
      )}
    </Formik>
  )
};
