import { useRef, useState } from "react";
import AsideProjectList from "./components/AsideProjectList";
import AddProject from "./components/AddProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [handleCreateProject, setHandleCreateProject] = useState(true);
  const [handleShowProjectDetail, setHandleShowProjectDetail] = useState(false);
  const [projectList, setProjectList] = useState([]);
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
    let newTask = projectList.map((project) => {
      if (project.id === selectedProject) {
        return { ...project, tasks: [...project.tasks, task] }; //gets everything that was already in item
      }
      return project; // else return unmodified item
    });
    setProjectList(newTask);
  }

  function handleProjectClick(projectId) {
    setSelectedProject(projectId);
    setHandleShowProjectDetail(true);
  }

  function deleteTask(item) {
    const project = projectList.find((obj) => obj.id === selectedProject);
    const result = project.tasks.filter((word) => word !== item);
    let newTask = projectList.map((project) => {
      if (project.id === selectedProject) {
        return { ...project, tasks: [...result] }; //gets everything that was already in item
      }
      return project; // else return unmodified item
    });
    setProjectList(newTask);
  }

  function deleteProject(item) {
    setHandleShowProjectDetail(false);
    setHandleCreateProject(true);
    setProjectList((products) =>
      products.filter((project, index) => project.id !== item)
    );
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
              selectedId={selectedProject}
              projectList={projectList}
              saveTaskValues={handleSaveTaskData}
              ref={refProjectTaskFormValues}
              deleteTask={deleteTask}
              deleteProject={deleteProject}
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
