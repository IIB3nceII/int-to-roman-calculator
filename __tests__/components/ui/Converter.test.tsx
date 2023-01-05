import { cleanup, render, screen } from "@testing-library/react";
import Home from "@/pages/index";
import { Converter } from "@/components/ui";

describe("Converter component tests", () => {
  beforeEach(() => {
    render(<Home />);
  });

  afterEach(() => {
    cleanup();
  });

  test("Output heading is visible on initialization.", () => {
    const outputHeading = screen.getByTestId("converter-output");

    expect(outputHeading).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(<Converter />);
    expect(container).toMatchSnapshot();
  });
});
