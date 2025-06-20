import React from "react";
import { render } from "@testing-library/react";
import Logo from "./Logo";

describe("Logo", () => {
  it("renders without crashing", () => {
    render(<Logo />);
  });
});
