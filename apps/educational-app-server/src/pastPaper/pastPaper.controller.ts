import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PastPaperService } from "./pastPaper.service";
import { PastPaperControllerBase } from "./base/pastPaper.controller.base";

@swagger.ApiTags("pastPapers")
@common.Controller("pastPapers")
export class PastPaperController extends PastPaperControllerBase {
  constructor(protected readonly service: PastPaperService) {
    super(service);
  }
}
