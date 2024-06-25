import { type FC, PropsWithChildren, type ReactNode } from "react";

type CourseProps = {
  title: string;
  desc: string;
  children: ReactNode;
};

export default function CourseGoal({ title, desc, children }: CourseProps) {
    return (
        <article>
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <button type="button">{children}</button>
    </article>
  );
  }

// // alternative way to get children and other props
// type CourseProps = PropsWithChildren<{ title: string; desc: string }>;

// const CourseGoal: FC<CourseProps> = ({ title, children, desc }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{desc}</p>
//       </div>
//       <button type="button">{children}</button>
//     </article>
//   );
// };
// export default CourseGoal;
