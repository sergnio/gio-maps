// create a jest test that tests if formatTime returns the correct string

import { formatTimestamp } from "@/app/utils/time";
import { test, expect } from "vitest";

test("formatTimestamp returns the correct string", () => {
  const timestamp = "2021-07-27T19:20:30Z";
  const formattedTimestamp = formatTimestamp(timestamp);
  expect(formattedTimestamp).toBe("July 27, 2021 at 3:20:30 PM");
});
