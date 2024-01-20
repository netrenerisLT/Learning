import { useRef, useState } from "react";
import AsideProjectList from "./components/AsideProjectList";
import Button from "./components/Button";
import Input from "./components/Input";

const inputValues = {
  title: "",
  desc: "",
  date: "",
};

function App() {
  const [handleCreateProject, setHandleCreateProject] = useState(true);

  function handleBtnClick() {
    setHandleCreateProject(false);
  }

  const title = useRef();
  const desc = useRef();
  const date = useRef();
  function handleSaveInputData(event) {
    event.preventDefault();
    inputValues.title = title.current.value;
    inputValues.desc = desc.current.value;
    inputValues.date = date.current.value;

    console.log(inputValues);
  }

  return (
    <>
      <div className="flex flex-row items-start mt-20 h-[calc(100vh_-_5rem)]">
        <div className="flex-initial w-96 h-full">
          <AsideProjectList onClick={handleBtnClick} />
        </div>
        <div className="flex-auto text-center text-emerald-900">
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
            <>
              <div></div>
              <form action="submit">
                <Button btn="btnDark" onClick={handleSaveInputData}>
                  Save
                </Button>
                <Input name={"title"} type={"text"} ref={title}>
                  Title
                </Input>
                <Input name={"desc"} type={"text"} ref={desc}>
                  Description
                </Input>
                <Input name={"date"} type={"text"} ref={date}>
                  Due Date
                </Input>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
