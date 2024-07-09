import { PastPaper as TPastPaper } from "../api/pastPaper/PastPaper";

export const PASTPAPER_TITLE_FIELD = "title";

export const PastPaperTitle = (record: TPastPaper): string => {
  return record.title?.toString() || String(record.id);
};
