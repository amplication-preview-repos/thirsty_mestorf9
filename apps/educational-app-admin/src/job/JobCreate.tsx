import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const JobCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Company" source="company" />
        <TextInput label="Location" source="location" />
        <NumberInput label="Salary" source="salary" />
      </SimpleForm>
    </Create>
  );
};
