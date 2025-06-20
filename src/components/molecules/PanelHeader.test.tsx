import React from "react";
import { render } from "@testing-library/react";
import PanelHeader from "./PanelHeader";

describe("PanelHeader", () => {
  it("renders without crashing", () => {
    render(<PanelHeader title="Test Title" />);
  });
});
