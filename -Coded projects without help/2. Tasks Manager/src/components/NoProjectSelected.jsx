import Button from "./Button";

export default function NoProjectSelected({ addProject }) {
  return (
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
      <Button btn="btnDark" onClick={addProject}>
        Create new project
      </Button>
    </>
  );
}
