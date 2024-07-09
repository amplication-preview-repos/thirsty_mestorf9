import { PastPaperWhereInput } from "./PastPaperWhereInput";
import { PastPaperOrderByInput } from "./PastPaperOrderByInput";

export type PastPaperFindManyArgs = {
  where?: PastPaperWhereInput;
  orderBy?: Array<PastPaperOrderByInput>;
  skip?: number;
  take?: number;
};
