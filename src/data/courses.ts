import type { Course } from "@/types/course";

import { pythonCourse } from "./course/python";
import { dataAnalystCourse } from "./course/dataAnalyst";
import { fullStackCourse } from "./course/fullStack";
import { digitalMarketingCourse } from "./course/digitalMarketing";

export const courses: Course[] = [
  pythonCourse,
  dataAnalystCourse,
  fullStackCourse,
  digitalMarketingCourse,
];