import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders alpaca generator text", () => {
  render(<App />);
  const linkElement = screen.getByText(/alpaca generator/i);
  expect(linkElement).toBeInTheDocument();
});
