import { SortOrder } from "../../util/SortOrder";

export type ChatOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  message?: SortOrder;
  sender?: SortOrder;
  receiver?: SortOrder;
  timestamp?: SortOrder;
};
