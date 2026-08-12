import type { Course } from "@/types/course";

import { pythonCourse } from "./course/python";
import { dataAnalystCourse } from "./course/dataAnalyst";
import { fullStackCourse } from "./course/fullStack";
import { digitalMarketingCourse } from "./course/digitalMarketing";
import { cmaUsaCourse } from "./course/cmaUsa";
import { accaUkCourse } from "./course/accaUk";
import { hrCourse } from "./course/hr";

export const courses: Course[] = [
  pythonCourse,
  dataAnalystCourse,
  fullStackCourse,
  digitalMarketingCourse,
  cmaUsaCourse,
  accaUkCourse,
  hrCourse,
];