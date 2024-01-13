import { expect, describe, test, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import PizzaRating from "@/app/components/PizzaRating/PizzaRating";

afterEach(cleanup);
describe("PizzaRating Tests", () => {
  for (let rating = 1; rating <= 5; rating++) {
    test(`if rating ${rating}, should have ${rating} full star(s)`, () => {
      render(<PizzaRating rating={rating} />);
      const pizzas = screen.getAllByText("🍕");
      expect(pizzas).toHaveLength(5);

      expect(
        pizzas.filter((pizza) => pizza.className.includes("fullPizza")),
      ).toHaveLength(rating);
      expect(
        pizzas.filter((pizza) => pizza.className.includes("emptyPizza")),
      ).toHaveLength(5 - rating);
    });
  }
});
