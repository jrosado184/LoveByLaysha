import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Nails from "./Nails";

test("sanity check", () => {
  render(<Nails />);
});

test("can show nail images", () => {
  render(<Nails />);
  const img = screen.getAllByRole(/img/);
  expect(img.length).toBe(16);
  expect(img).toBeTruthy();
});
