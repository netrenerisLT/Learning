import Button from "./Button";

export default function AsideProjectList(props) {
  return (
    <aside className="flex flex-col items-center gap-10 py-16 px-8 text-center capitalize bg-emerald-900 text-white h-full rounded-tr-2xl">
      <h2 className="font-bold text-3xl">Your Projects</h2>
      <Button btn="btnLight" onClick={props.onClick}>
        + Add Project
      </Button>
      <ol>
        <input type="text" name="ra" id="ra" />
      </ol>
    </aside>
  );
}
