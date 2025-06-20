import React from "react";
import { render } from "@testing-library/react";
import WelcomeMessage from "./WelcomeMessage";

describe("WelcomeMessage", () => {
  it("renders without crashing", () => {
    render(<WelcomeMessage />);
  });
});
