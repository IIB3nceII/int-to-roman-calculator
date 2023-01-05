import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Converter component tests", () => {
  test("Output heading is visible on initialization.", () => {
    render(<Home />);

    const outputHeading = screen.getByTestId("converter-output");

    expect(outputHeading).toBeInTheDocument();
  });
});
