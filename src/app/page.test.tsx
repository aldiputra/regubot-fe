import React from "react";
import { render } from "@testing-library/react";
import Home from "./page";
import { LoginProvider } from "@/contexts/LoginContext";

describe("Home page", () => {
  it("renders without crashing", () => {
    render(
      <LoginProvider>
        <Home />
      </LoginProvider>
    );
  });
});
