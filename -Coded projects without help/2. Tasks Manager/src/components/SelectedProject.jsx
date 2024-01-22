import Button from "./Button";
import Input from "./Input";
import { forwardRef } from "react";

const SelectedProject = forwardRef(function SelectedProject(
  { projectList, saveTaskValues, deleteTask },
  refTask
) {
  let projectTasks;

  if (projectList.tasks) {
    projectTasks = projectList.tasks.map((item) => {
      return (
        <li
          key={projectList.id + item}
          className="p-1 flex items-center bg-gray-50  justify-between px-2"
        >
          <h3>{item}</h3>
          <Button
            onClick={() => deleteTask(item)}
            btn={"py-2 font-normal capitalize"}
          >
            Clear
          </Button>
        </li>
      );
    });
  }

  return (
    <div className="px-8 flex flex-col items-start text-start">
      <div className="w-full">
        <h1 className="text-3xl font-bold capitalize">{projectList.title}</h1>
        <p className="mt-2 mb-4 italic">{projectList.date}</p>
        <p className="mt-4 mb-8">{projectList.desc}</p>
        <hr className="border-b-1 border-emerald-800 rounded w-full mb-8" />
      </div>
      <div className="w-full">
        <h1 className="text-3xl font-bold capitalize">tasks</h1>
        <form
          //   action="submit"
          className="flex flex-wrap md:flex-nowrap flex-auto gap-5 max-w-2xl"
          ref={refTask}
        >
          <Input name={"taskName"} type={"text"}></Input>
          <Button btn="btnLight flex-none" onClick={saveTaskValues}>
            Add Task
          </Button>
        </form>
        {projectTasks ? (
          <ol className="flex flex-col gap-4 mt-8 max-w-2xl">{projectTasks}</ol>
        ) : (
          <p className="mt-2 mb-4 italic">
            Project doesn&apos;t have a task yet.
          </p>
        )}
      </div>
    </div>
  );
});

export default SelectedProject;
