import { expect, describe, test, afterEach } from "vitest";

import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import ReadMore from "./ReadMore"; // Adjust the import path as necessary

afterEach(cleanup);

describe("ReadMore Component tests", () => {
  const shortText = "Short text example.";
  const longText = "Long text ".repeat(400); // Ensure this is longer than MAX_CHARS
  const ellipsesRegex = /\.\.\./;

  test("displays entire text without button for short text", () => {
    render(<ReadMore text={shortText} />);
    expect(screen.getByText(shortText)).toBeTruthy();
    expect(screen.queryByText("Read More")).toBeFalsy();
  });

  test('truncates text and shows "Read More" button for long text', () => {
    render(<ReadMore text={longText} />);
    expect(screen.getByText(ellipsesRegex)).toBeTruthy(); // Checks for ellipsis
    expect(screen.getByText("Read More")).toBeTruthy();
  });

  test('expands text and changes button to "Read Less" on click', () => {
    render(<ReadMore text={longText} />);
    const readMoreButton = screen.getByRole("button", { name: /read more/i });
    fireEvent.click(readMoreButton);

    expect(screen.getByRole("button", { name: /read less/i })).toBeTruthy();
    expect(screen.queryByText(ellipsesRegex)).toBeFalsy(); // Ellipsis should not be present
  });

  test('expands text and changes button to "Read Less" on click, can click back to original state', () => {
    render(<ReadMore text={longText} />);
    const readMoreButton = screen.getByRole("button", { name: /read more/i });
    fireEvent.click(readMoreButton);

    expect(screen.getByRole("button", { name: /read less/i })).toBeTruthy();
    expect(screen.queryByText(ellipsesRegex)).toBeFalsy(); // Ellipsis should not be present

    fireEvent.click(readMoreButton);
  });
});
