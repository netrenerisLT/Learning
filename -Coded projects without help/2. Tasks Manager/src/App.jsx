import AsideProjectList from "./components/AsideProjectList";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div className="flex flex-row items-start mt-20 h-[calc(100vh_-_5rem)]">
        <div className="flex-initial w-96 h-full">
          <AsideProjectList />
        </div>
        <div className="flex-auto text-center text-emerald-900">
          <img
            src="logo.png"
            alt="logo"
            className="w-20 h-20 object-contain mx-auto"
          />
          <h1 className="mt-8 text-3xl font-bold capitalize ">
            No project selected
          </h1>
          <p className="mt-4 mb-20">
            Select project or get started with the new one.
          </p>
          <Button
            bColor="bg-emerald-900"
            bHColor="hover:bg-emerald-800"
            tColor="text-emerald-50"
          >
            Create new project
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
