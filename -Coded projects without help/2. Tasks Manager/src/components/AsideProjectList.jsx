import Button from "./Button";

export default function AsideProjectList() {
  return (
    <aside className="flex flex-col items-center gap-10 py-16 px-8 text-center capitalize bg-emerald-900 text-white h-full rounded-tr-2xl">
      <h2 className="font-bold text-3xl">Your Projects</h2>
      <Button
        bColor="bg-emerald-50"
        bHColor="hover:bg-emerald-100"
        tColor="text-emerald-900"
      >
        Add Project
      </Button>
      <ol>Project list</ol>
    </aside>
  );
}
