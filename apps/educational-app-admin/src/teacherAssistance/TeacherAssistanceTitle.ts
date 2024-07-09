import { TeacherAssistance as TTeacherAssistance } from "../api/teacherAssistance/TeacherAssistance";

export const TEACHERASSISTANCE_TITLE_FIELD = "name";

export const TeacherAssistanceTitle = (record: TTeacherAssistance): string => {
  return record.name?.toString() || String(record.id);
};
