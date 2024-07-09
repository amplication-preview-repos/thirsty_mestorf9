import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PastPaperServiceBase } from "./base/pastPaper.service.base";

@Injectable()
export class PastPaperService extends PastPaperServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
