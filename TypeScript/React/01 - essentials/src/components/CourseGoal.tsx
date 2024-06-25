import { type FC, PropsWithChildren, type ReactNode } from "react";

type CourseProps = {
  id: number;
  title: string;
  desc: string;
  children: ReactNode;
  onDelete: (id: number) => void;
};

export default function CourseGoal({
  id,
  title,
  desc,
  children,
  onDelete,
}: CourseProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <button onClick={() => onDelete(id)} type="button">
        {children}
      </button>
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
