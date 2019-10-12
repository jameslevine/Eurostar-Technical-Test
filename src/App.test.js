import App from "./App";
import React from "react";
import { render } from "@testing-library/react";

test("App renders", () => {
  const { getByText } = render(<App />);
  getByText("Eurostar To-do List");
});
