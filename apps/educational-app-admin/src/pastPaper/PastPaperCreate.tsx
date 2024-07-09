import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const PastPaperCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="Content" multiline source="content" />
        <TextInput label="Subject" source="subject" />
        <NumberInput step={1} label="Year" source="year" />
      </SimpleForm>
    </Create>
  );
};
