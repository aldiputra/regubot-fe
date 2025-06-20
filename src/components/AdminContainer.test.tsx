import React from "react";
import { render } from "@testing-library/react";
import AdminContainer from "./AdminContainer";

describe("AdminContainer", () => {
  it("renders without crashing", () => {
    render(<AdminContainer />);
  });
});
