import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ChatShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Message" source="message" />
        <TextField label="Sender" source="sender" />
        <TextField label="Receiver" source="receiver" />
        <TextField label="Timestamp" source="timestamp" />
      </SimpleShowLayout>
    </Show>
  );
};
