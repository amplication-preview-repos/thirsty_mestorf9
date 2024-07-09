import * as graphql from "@nestjs/graphql";
import { PastPaperResolverBase } from "./base/pastPaper.resolver.base";
import { PastPaper } from "./base/PastPaper";
import { PastPaperService } from "./pastPaper.service";

@graphql.Resolver(() => PastPaper)
export class PastPaperResolver extends PastPaperResolverBase {
  constructor(protected readonly service: PastPaperService) {
    super(service);
  }
}
