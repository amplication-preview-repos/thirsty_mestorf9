import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const JobEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Company" source="company" />
        <TextInput label="Location" source="location" />
        <NumberInput label="Salary" source="salary" />
      </SimpleForm>
    </Edit>
  );
};
