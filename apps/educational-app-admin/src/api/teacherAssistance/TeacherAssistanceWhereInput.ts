import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type TeacherAssistanceWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  specialty?: StringNullableFilter;
  availability?: BooleanNullableFilter;
  contact?: StringNullableFilter;
};
