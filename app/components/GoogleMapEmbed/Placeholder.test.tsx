import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Placeholder from "./Placeholder";

test("Placeholder tests", () => {
  render(<Placeholder containerStyle={{ width: "1px", height: "1px" }} />);
});
