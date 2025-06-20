import React from "react";
import { render } from "@testing-library/react";
import UploadArea from "./UploadArea";

describe("UploadArea", () => {
  it("renders without crashing", () => {
    render(<UploadArea />);
  });
});
