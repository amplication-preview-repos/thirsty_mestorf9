import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const TeacherAssistanceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Specialty" source="specialty" />
        <BooleanInput label="Availability" source="availability" />
        <TextInput label="Contact" source="contact" type="email" />
      </SimpleForm>
    </Edit>
  );
};
