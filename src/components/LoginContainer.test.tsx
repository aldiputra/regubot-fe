import React from "react";
import { render } from "@testing-library/react";
import LoginContainer from "./LoginContainer";
import { LoginProvider } from "@/contexts/LoginContext";

describe("LoginContainer", () => {
  it("renders without crashing", () => {
    render(
      <LoginProvider>
        <LoginContainer />
      </LoginProvider>
    );
  });
});
