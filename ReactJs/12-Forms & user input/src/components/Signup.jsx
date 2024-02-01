import {
  hasMinLength,
  isEmail,
  isEqualsToOtherValue,
  isNotEmpty,
} from "../util/validation";
import Input from "./Input";

export default function Signup() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const acquisitionInputs = formData.getAll("acquisition");
    const formValues = Object.fromEntries(formData.entries());
    formValues.acquisition = acquisitionInputs;

    if (
      (hasMinLength(formValues.password, 3) &&
        !isEqualsToOtherValue(
          formValues.password,
          formValues["confirm-password"]
        )) ||
      !isEmail(formValues.email)
    ) {
      return;
    }

    for (const property in formValues) {
      if (property !== "acquisition" && !isNotEmpty(formValues[property])) {
        return;
      }
    }
    console.log(formValues);

    // event.target.reset(); //reset form or instead use button type="reset" helps to do reset too
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <Input label="Email" id="email" type="text" name="email" required />

      <div className="control-row">
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          required
        />
        <Input
          label="Confirm Password"
          id="confirm-password"
          type="password"
          name="confirm-password"
          required
        />
      </div>

      <hr />

      <div className="control-row">
        <Input
          label="First Name"
          id="first-name"
          type="text"
          name="first-name"
          required
        />
        <Input label="Last Name" id="last-name" type="text" name="last-name" />
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role" required>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <Input
          label="Google"
          id="google"
          type="checkbox"
          name="acquisition"
          value="google"
        />
        <Input
          label="Referred by friend"
          id="friend"
          type="checkbox"
          name="acquisition"
          value="friend"
        />
        <Input
          label="Other"
          id="other"
          type="checkbox"
          name="acquisition"
          value="other"
        />
      </fieldset>

      <Input
        label="I agree to the terms and conditions"
        id="terms-and-conditions"
        type="checkbox"
        name="terms"
        required
      />
      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
}
