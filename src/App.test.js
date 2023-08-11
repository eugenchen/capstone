import { render, screen } from "@testing-library/react";
import App from "./App";
import ReservationForm from "./ReservationForm";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("Renders the ReservationForm heading", () => {
  render(<ReservationForm />);
  const headingElement = screen.getByText("Reserve a table");
  expect(headingElement).toBeInTheDocument();
});
