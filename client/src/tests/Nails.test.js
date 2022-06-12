import React from "react";
import { render } from "@testing-library/react";
import Nails from "./../components/Nails/NailImages";

describe("Nails", () => {
  test("Nail images display on the screen", () => {
    render(<Nails imageUrl={imageUrl} />);
  });
});
