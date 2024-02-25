import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders hello world", () => {
    render(<Greeting />);
    const helloWorld = screen.getByText("Hello world", { exact: false });
    expect(helloWorld).toBeInTheDocument();
  });

  test("changed text", () => {
    render(<Greeting />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    const changedText = screen.getByText("nice to meet you", { exact: false });
    expect(changedText).toBeInTheDocument();
  });

  test("not changed text", () => {
    render(<Greeting />);
    const notChangedText = screen.getByText("Not changed", { exact: false });
    expect(notChangedText).toBeInTheDocument();
  });

  test("text isnt visible", () => {
    render(<Greeting />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    const changedText = screen.queryByText("Not changed", {
      exact: false,
    });
    expect(changedText).not.toBeInTheDocument();
  });
});
