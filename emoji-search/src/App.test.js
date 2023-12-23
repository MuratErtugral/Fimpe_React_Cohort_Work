import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
  render(<App />);
  // You can add more assertions based on your component's behavior
});