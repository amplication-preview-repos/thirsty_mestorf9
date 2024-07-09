import { Module } from "@nestjs/common";
import { TeacherAssistanceModuleBase } from "./base/teacherAssistance.module.base";
import { TeacherAssistanceService } from "./teacherAssistance.service";
import { TeacherAssistanceController } from "./teacherAssistance.controller";
import { TeacherAssistanceResolver } from "./teacherAssistance.resolver";

@Module({
  imports: [TeacherAssistanceModuleBase],
  controllers: [TeacherAssistanceController],
  providers: [TeacherAssistanceService, TeacherAssistanceResolver],
  exports: [TeacherAssistanceService],
})
export class TeacherAssistanceModule {}
