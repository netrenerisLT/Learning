import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("async tests", () => {
  test("renders posts", async () => {
    render(<Async></Async>);

    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).not.toHaveLength(0);
  });
});
