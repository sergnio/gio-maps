import { formatTimestamp } from "@/app/utils/time";
import { test, expect, describe } from "vitest";

test("formatTimestamp returns the correct string", () => {
  const timestamp = "2023-12-21T21:29:56Z";
  const formattedTimestamp = formatTimestamp(timestamp);
  expect(formattedTimestamp).toBe("December 21, 2023 at 03:29 PM");
});

describe("throws error if given an invalid timestamp", () => {
  test("missing a Z at the end", () => {
    const timestamp = "2023-12-21T21:29:56";
    expect(() => formatTimestamp(timestamp)).toThrowError(
      "Invalid timestamp format",
    );
  });

  test("missing a T in the middle", () => {
    const timestamp = "2023-12-21 21:29:56Z";
    expect(() => formatTimestamp(timestamp)).toThrowError(
      "Invalid timestamp format",
    );
  });

  test("Just a random string", () => {
    const timestamp = "hello";
    expect(() => formatTimestamp(timestamp)).toThrowError(
      "Invalid timestamp format",
    );
  });
});
