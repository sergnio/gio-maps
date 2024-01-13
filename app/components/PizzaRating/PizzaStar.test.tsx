import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import PizzaStar from "./PizzaStar";

test("Test if the pizza has the filled class if filled", () => {
  render(<PizzaStar filled />);
  const pizzas = screen.getAllByText("🍕");
  pizzas.filter((pizza) => pizza.className.includes("fullPizza"));
});

test("Test if the pizza has the empty class if not filled", () => {
  render(<PizzaStar filled={false} />);
  const pizzas = screen.getAllByText("🍕");
  pizzas.filter((pizza) => pizza.className.includes("emptyPizza"));
});
