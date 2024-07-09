import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ChatCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Message" multiline source="message" />
        <TextInput label="Sender" source="sender" />
        <TextInput label="Receiver" source="receiver" />
        <DateTimeInput label="Timestamp" source="timestamp" />
      </SimpleForm>
    </Create>
  );
};
