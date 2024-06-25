import { CourseGoal as CourseGProps } from "../App";
import CourseGoal from "./CourseGoal";

type CourseGoalsProps = {
  goals: CourseGProps[];
  onDeleteGoal: (id: number) => void;
};


export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalsProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} desc={goal.desc} onDelete={onDeleteGoal}>
            -Delete-
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
