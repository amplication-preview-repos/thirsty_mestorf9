import { SortOrder } from "../../util/SortOrder";

export type PastPaperOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  content?: SortOrder;
  subject?: SortOrder;
  year?: SortOrder;
};
