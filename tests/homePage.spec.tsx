import { test, expect } from "@playwright/test";

test("should load the home page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  // Find an element with the text 'About' and click on it
  // await page.click("text=About");
  // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL("http://localhost:3000/");
  // The new page should contain an h1 with "About"
  await expect(page.locator("h1")).toContainText("GioMaps");

  await expect(page).toHaveTitle(/Pizza Finder/i);
});

test("should navigate easily to the details page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  // Find an element with the text 'Galactic Pizza' and click on it
  await page.click("text=Galactic Pizza");
  await expect(page).toHaveURL("details/ChIJe18Tmogn9ocR7UpRi67Wfz8");
  await expect(
    page.locator("h1", { hasText: /Galactic Pizza/i }),
  ).toContainText(/Galactic Pizza/i);

  await expect(page).toHaveTitle(/Pizza Finder/i);
});
