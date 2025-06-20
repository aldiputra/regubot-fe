import React from "react";
import { render } from "@testing-library/react";
import ChatbotContainer from "./ChatbotContainer";

describe("ChatbotContainer", () => {
  it("renders without crashing", () => {
    render(<ChatbotContainer />);
  });
});
