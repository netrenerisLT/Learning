import { useRef, useState } from "react";
import AsideProjectList from "./components/AsideProjectList";
import AddProject from "./components/AddProject";
import NoProjectSelected from "./components/NoProjectSelected";

const innitialProjectListValues = [
  {
    title: "as",
    desc: "asd",
    date: "sad",
  },
  {
    title: "bs",
    desc: "bsd",
    date: "sad",
  },
];

function App() {
  const [handleCreateProject, setHandleCreateProject] = useState(true);
  const [projectList, setProjectList] = useState(innitialProjectListValues);

  function handleBtnClick() {
    setHandleCreateProject(false);
  }

  const refProjectListFormValues = useRef();

  function handleSaveInputData(event) {
    event.preventDefault();
    const title = refProjectListFormValues.current["title"].value;
    const desc = refProjectListFormValues.current["desc"].value;
    const date = refProjectListFormValues.current["date"].value;
    if (title && desc && date) {
      console.log("first");
      setProjectList((prevVal) => [
        ...prevVal,
        {
          title: title,
          desc: desc,
          date: date,
        },
      ]);
    }
    setHandleCreateProject(true);
  }

  function hanndle() {
    console.log(projectList);

    if (projectList == 0) {
      console.log("first");
    }
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
          />
        </div>
        <div className="flex-auto text-center items-center text-emerald-900">
          {handleCreateProject ? (
            <NoProjectSelected addProject={handleBtnClick} />
          ) : (
            <AddProject
              saveValues={handleSaveInputData}
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
