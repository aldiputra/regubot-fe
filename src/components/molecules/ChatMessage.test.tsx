import React from "react";
import { render } from "@testing-library/react";
import ChatMessage from "./ChatMessage";

describe("ChatMessage", () => {
  it("renders without crashing", () => {
    render(<ChatMessage message="Test message" />);
  });
});
