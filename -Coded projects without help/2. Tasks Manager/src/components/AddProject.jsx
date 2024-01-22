import { forwardRef } from "react";
import Button from "./Button";
import Input from "./Input";

const AddProject = forwardRef(function AddProject(
  { saveProjectValues, closeProjectForm },
  refProjectListFormValues
) {
  function handleDeleteInputData(event) {
    event.preventDefault();
    event.target.form.reset();
    closeProjectForm();
  }
  return (
    <form
      //   action="submit"
      className="max-w-2xl flex flex-col gap-5 m-auto px-8"
      ref={refProjectListFormValues}
    >
      <div className="text-right flex gap-2 justify-end">
        <Button btn="btnLight" onClick={handleDeleteInputData}>
          Cancel
        </Button>
        <Button btn="btnDark" onClick={saveProjectValues}>
          Save
        </Button>
      </div>
      <Input name={"title"} type={"text"}>
        Title
      </Input>
      <Input name={"desc"} type={"text"}>
        Description
      </Input>
      <Input name={"date"} type={"date"}>
        Due Date
      </Input>
    </form>
  );
});

export default AddProject;
