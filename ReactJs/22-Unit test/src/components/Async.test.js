import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("async tests", () => {
  test("renders posts", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });

    render(<Async></Async>);

    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).not.toHaveLength(0);
  });
});
