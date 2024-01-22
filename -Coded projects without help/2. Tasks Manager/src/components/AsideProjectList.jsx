import Button from "./Button";

export default function AsideProjectList({
  projectList,
  handleProjectClick,
  onClick,
}) {
  const projectsList = projectList.map((item) => {
    return (
      <li key={item.title + item.date} className="p-1">
        <button
          onClick={() => handleProjectClick(item.id)}
          className="text-cyan-50 py-4 capitalize hover:bg-emerald-800 w-full rounded-md"
        >
          {item.title}
        </button>
      </li>
    );
  });

  return (
    <aside className="flex flex-col items-center gap-10 py-16 px-8 text-center capitalize bg-emerald-900 text-white h-full rounded-tr-2xl">
      <h2 className="font-bold text-3xl">Your Projects</h2>
      <Button btn="btnLight" onClick={onClick}>
        + Add Project
      </Button>
      <ol className="w-3/5 ">{projectsList}</ol>
    </aside>
  );
}
