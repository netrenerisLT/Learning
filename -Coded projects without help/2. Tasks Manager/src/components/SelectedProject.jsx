import Button from "./Button";
import Input from "./Input";
import { forwardRef } from "react";

const SelectedProject = forwardRef(function SelectedProject(
  { projectList, saveTaskValues },
  refTask
) {
  return (
    <div className="px-8 flex flex-col items-start text-start">
      <div className="w-full">
        <h1 className="text-3xl font-bold capitalize">
          {projectList[1].title}
        </h1>
        <p className="mt-2 mb-4 italic">{projectList[1].date}</p>
        <p className="mt-4 mb-8">{projectList[1].desc}</p>
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
        <p className="mt-2 mb-4 italic">
          Project doesn&apos;t have a task yet.
        </p>
      </div>
    </div>
  );
});

export default SelectedProject;
