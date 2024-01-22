import Button from "./Button";
import Input from "./Input";
import { forwardRef } from "react";

const SelectedProject = forwardRef(function SelectedProject(
  { projectList, saveTaskValues, deleteTask, deleteProject, selectedId },
  refTask
) {
  const project = projectList.find((obj) => obj.id === selectedId);

  return (
    <div className="px-8 flex flex-col m-auto text-start max-w-2xl">
      <div className="w-full flex justify-between">
        <div>
          <h1 className="text-3xl font-bold capitalize">{project.title}</h1>
          <p className="mt-2 mb-4 italic">{project.date}</p>
          <p className="mt-4 mb-8">{project.desc}</p>
        </div>
        <div>
          <Button btn={"py-0 btn"} onClick={() => deleteProject(project.id)}>
            Delete
          </Button>
        </div>
      </div>
      <div className="w-full">
        <hr className="border-b-1 border-emerald-800 rounded w-full mb-8" />
        <h1 className="text-3xl font-bold capitalize">tasks</h1>
        <form
          //   action="submit"
          className="flex flex-wrap md:flex-nowrap flex-auto gap-5"
          ref={refTask}
        >
          <Input name={"taskName"} type={"text"}></Input>
          <Button btn="btnLight flex-none" onClick={saveTaskValues}>
            Add Task
          </Button>
        </form>
        {project.tasks ? (
          <ol className="flex flex-col gap-4 mt-8">
            {project.tasks.map((item) => {
              return (
                <li
                  key={project.id + item}
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
            })}
          </ol>
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
