import * as graphql from "@nestjs/graphql";
import { TeacherAssistanceResolverBase } from "./base/teacherAssistance.resolver.base";
import { TeacherAssistance } from "./base/TeacherAssistance";
import { TeacherAssistanceService } from "./teacherAssistance.service";

@graphql.Resolver(() => TeacherAssistance)
export class TeacherAssistanceResolver extends TeacherAssistanceResolverBase {
  constructor(protected readonly service: TeacherAssistanceService) {
    super(service);
  }
}
