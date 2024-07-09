import { TeacherAssistanceWhereInput } from "./TeacherAssistanceWhereInput";
import { TeacherAssistanceOrderByInput } from "./TeacherAssistanceOrderByInput";

export type TeacherAssistanceFindManyArgs = {
  where?: TeacherAssistanceWhereInput;
  orderBy?: Array<TeacherAssistanceOrderByInput>;
  skip?: number;
  take?: number;
};
