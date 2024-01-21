import { useRef, useState } from "react";
import AsideProjectList from "./components/AsideProjectList";
import Button from "./components/Button";
import AddProject from "./components/AddProject";

const innitialProjectListValues = [
  {
    title: "",
    desc: "",
    date: "",
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
    setProjectList((prevVal) => [
      ...prevVal,
      {
        title: refProjectListFormValues.current["title"].value,
        desc: refProjectListFormValues.current["desc"].value,
        date: refProjectListFormValues.current["date"].value,
      },
    ]);
    setHandleCreateProject(true);
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
          />
        </div>
        <div className="flex-auto text-center items-center text-emerald-900">
          {handleCreateProject ? (
            <>
              <img
                src="logo.png"
                alt="logo"
                className="w-20 h-20 object-contain mx-auto"
              />
              <h1 className="mt-8 text-3xl font-bold capitalize ">
                No project selected
              </h1>
              <p className="mt-6 mb-20">
                Select project or get started with the new one.
              </p>
              <Button btn="btnDark" onClick={handleBtnClick}>
                Create new project
              </Button>
            </>
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
