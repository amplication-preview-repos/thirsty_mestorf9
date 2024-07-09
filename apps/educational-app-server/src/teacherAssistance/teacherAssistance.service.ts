import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TeacherAssistanceServiceBase } from "./base/teacherAssistance.service.base";

@Injectable()
export class TeacherAssistanceService extends TeacherAssistanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
