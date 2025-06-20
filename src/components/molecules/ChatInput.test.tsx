import React from "react";
import { render } from "@testing-library/react";
import ChatInput from "./ChatInput";

describe("ChatInput", () => {
  it("renders without crashing", () => {
    render(<ChatInput onSendMessage={() => {}} />);
  });
});
