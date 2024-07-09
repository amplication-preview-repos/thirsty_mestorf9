import { Module } from "@nestjs/common";
import { PastPaperModuleBase } from "./base/pastPaper.module.base";
import { PastPaperService } from "./pastPaper.service";
import { PastPaperController } from "./pastPaper.controller";
import { PastPaperResolver } from "./pastPaper.resolver";

@Module({
  imports: [PastPaperModuleBase],
  controllers: [PastPaperController],
  providers: [PastPaperService, PastPaperResolver],
  exports: [PastPaperService],
})
export class PastPaperModule {}
