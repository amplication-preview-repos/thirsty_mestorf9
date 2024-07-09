import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const PastPaperEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="Content" multiline source="content" />
        <TextInput label="Subject" source="subject" />
        <NumberInput step={1} label="Year" source="year" />
      </SimpleForm>
    </Edit>
  );
};
