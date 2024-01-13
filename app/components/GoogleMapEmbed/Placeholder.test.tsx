import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Placeholder from "./Placeholder";

test("Placeholder render test", () => {
  render(<Placeholder containerStyle={{ width: "1px", height: "1px" }} />);
});
