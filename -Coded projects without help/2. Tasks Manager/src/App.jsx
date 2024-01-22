import { useRef, useState } from "react";
import AsideProjectList from "./components/AsideProjectList";
import AddProject from "./components/AddProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

const innitialProjectListValues = [
  {
    title: "as",
    desc: "asd",
    date: "2012-10-12",
  },
  {
    title: "bs",
    desc: "bsd",
    date: "2012-10-12",
  },
];

function App() {
  const [handleCreateProject, setHandleCreateProject] = useState(true);
  const [projectList, setProjectList] = useState(innitialProjectListValues);

  const refProjectListFormValues = useRef();
  const refProjectTaskFormValues = useRef();
  function handleBtnClick() {
    setHandleCreateProject(false);
  }

  function handleSaveProjectData() {
    // event.preventDefault();
    const title = refProjectListFormValues.current["title"].value;
    const desc = refProjectListFormValues.current["desc"].value;
    const date = refProjectListFormValues.current["date"].value;
    if (title && desc && date) {
      setProjectList((prevVal) => [
        ...prevVal,
        {
          title: title,
          desc: desc,
          date: date,
        },
      ]);
      setHandleCreateProject(true);
    } else return;
  }

  function handleSaveTaskData() {
    event.preventDefault();
    console.log(refProjectTaskFormValues.current["taskName"].value);
  }

  function handleProjectClick() {
    console.log("first");
  }

  function hanndle() {
    console.log(projectList);
  }
  return (
    <>
      <div className="flex flex-row items-start mt-20 h-[calc(100vh_-_5rem)]">
        <button onClick={hanndle} className="btnLight">
          lalalal
        </button>
        <div className="flex-initial w-96 h-full">
          <AsideProjectList
            onClick={handleBtnClick}
            projectList={projectList}
            handleProjectClick={handleProjectClick}
          />
        </div>
        <div className="flex-auto text-center items-center text-emerald-900">
          {handleCreateProject && (
            <NoProjectSelected addProject={handleBtnClick} />
          )}
          {handleCreateProject ? (
            <SelectedProject
              projectList={projectList}
              saveTaskValues={handleSaveTaskData}
              ref={refProjectTaskFormValues}
            />
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
