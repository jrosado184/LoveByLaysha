import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Book from "../Appointments/Book";

test("sanity check", () => {
  expect(1).toBe(1);
});

describe("can book an appointment", () => {
  test("Can select a time", () => {
    render(
      <select multiple>
        <option value="1">10:00</option>
        <option value="2">10:30</option>
        <option value="3">11:00</option>
      </select>
    );
    userEvent.selectOptions(screen.getByRole("listbox"), ["1", "3"]);

    expect(screen.getByRole("option", { name: "10:00" }).selected).toBe(true);
    expect(screen.getByRole("option", { name: "10:30" }).selected).toBe(false);
    expect(screen.getByRole("option", { name: "11:00" }).selected).toBe(true);
  });
  test("can add their name", () => {
    render(<Book />);
    const name = screen.queryByTestId(/name/);
    userEvent.type(name, "javier");
  });
  test("can add their phone number", () => {
    const phone = screen.queryByTestId(/phone/);
    userEvent.type(phone, "2672589846");
  });
  test("can select a set", () => {
    render(
      <select multiple>
        <option value="1">Shortie</option>
        <option value="2">Med</option>
        <option value="3">large</option>
      </select>
    );
    userEvent.selectOptions(screen.getByRole("listbox"), ["1", "3"]);

    expect(screen.getByRole("option", { name: "Shortie" }).selected).toBe(true);
    expect(screen.getByRole("option", { name: "Med" }).selected).toBe(false);
    expect(screen.getByRole("option", { name: "large" }).selected).toBe(true);
  });
  test("refill select option appears on toggle", () => {
    render(<Book />);
    const input = screen.getByTestId(/rinput/);
    userEvent.click(input);
    const refill = screen.getByTestId(/refill/);
    expect(refill).toBeInTheDocument();
  });
  test("can add additional details", () => {
    render(<Book />);
    const details = screen.queryByTestId(/details/);
    userEvent.type(details, "no details");
    expect(details).toBeInTheDocument();
  });
});
