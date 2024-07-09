import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TeacherAssistanceService } from "./teacherAssistance.service";
import { TeacherAssistanceControllerBase } from "./base/teacherAssistance.controller.base";

@swagger.ApiTags("teacherAssistances")
@common.Controller("teacherAssistances")
export class TeacherAssistanceController extends TeacherAssistanceControllerBase {
  constructor(protected readonly service: TeacherAssistanceService) {
    super(service);
  }
}
