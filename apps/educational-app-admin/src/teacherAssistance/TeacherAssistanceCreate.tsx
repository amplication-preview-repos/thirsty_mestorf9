import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const TeacherAssistanceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Specialty" source="specialty" />
        <BooleanInput label="Availability" source="availability" />
        <TextInput label="Contact" source="contact" type="email" />
      </SimpleForm>
    </Create>
  );
};
