import React from "react";
import { render } from "@testing-library/react";
import Title from "./Title";

describe("Title", () => {
  it("renders without crashing", () => {
    render(<Title>Test</Title>);
  });
});
