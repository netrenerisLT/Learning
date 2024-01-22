import { useRef, useState } from "react";
import AsideProjectList from "./components/AsideProjectList";
import AddProject from "./components/AddProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

const innitialProjectListValues = [
  {
    id: 1,
    title: "as",
    desc: "asd",
    date: "2012-10-12",
    tasks: ["ba", "as", "va"],
  },
  {
    id: 2,
    title: "bs",
    desc: "bsd",
    date: "2012-10-12",
    tasks: ["ba", "as", "va", "ga", "kia"],
  },
];

function App() {
  const [handleCreateProject, setHandleCreateProject] = useState(true);
  const [handleShowProjectDetail, setHandleShowProjectDetail] = useState(false);
  const [projectList, setProjectList] = useState(innitialProjectListValues);
  const [selectedProject, setSelectedProject] = useState();

  const refProjectListFormValues = useRef();
  const refProjectTaskFormValues = useRef();

  function handleBtnClick() {
    setHandleCreateProject(false);
    setHandleShowProjectDetail(false);
  }

  function handleSaveProjectData() {
    // event.preventDefault();
    const id = new Date().valueOf();
    const title = refProjectListFormValues.current["title"].value;
    const desc = refProjectListFormValues.current["desc"].value;
    const date = refProjectListFormValues.current["date"].value;
    if (title && desc && date) {
      setProjectList((prevVal) => [
        ...prevVal,
        {
          id: id,
          title: title,
          desc: desc,
          date: date,
          tasks: [],
        },
      ]);
      setHandleCreateProject(true);
    } else return;
  }

  function handleSaveTaskData(event) {
    event.preventDefault();
    const task = refProjectTaskFormValues.current["taskName"].value;
    refProjectTaskFormValues.current["taskName"].value = "";
    if (task !== "" && task.length >= 1) {
      selectedProject.tasks.push(task);
    }
  }

  function handleProjectClick(projectId) {
    const project = projectList.find((obj) => obj.id === projectId);
    setSelectedProject(project);
    setHandleShowProjectDetail(true);
  }

  function deleteTask(item) {
    const index = selectedProject.tasks.indexOf(item);
    if (index !== -1) {
      selectedProject.tasks.splice(index, 1);
    }
  }

  return (
    <>
      <div className="flex flex-row items-start mt-20 h-[calc(100vh_-_5rem)]">
        <div className="flex-initial w-96 h-full">
          <AsideProjectList
            onClick={handleBtnClick}
            projectList={projectList}
            handleProjectClick={handleProjectClick}
          />
        </div>
        <div className="flex-auto text-center items-center text-emerald-900">
          {handleShowProjectDetail ? (
            <SelectedProject
              projectList={selectedProject}
              saveTaskValues={handleSaveTaskData}
              ref={refProjectTaskFormValues}
              deleteTask={deleteTask}
            />
          ) : handleCreateProject ? (
            <NoProjectSelected addProject={handleBtnClick} />
          ) : (
            <AddProject
              saveProjectValues={handleSaveProjectData}
              closeProjectForm={() => setHandleCreateProject(true)}
              ref={refProjectListFormValues}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
