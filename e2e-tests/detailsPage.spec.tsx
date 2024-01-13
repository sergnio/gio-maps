import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  const detailsUrl = "details/ChIJe18Tmogn9ocR7UpRi67Wfz8";

  await page.goto(detailsUrl);
  await expect(page).toHaveURL(detailsUrl);
});

test("should load the details page", async ({ page }) => {
  await expect(page).toHaveTitle(/Pizza Finder/i);

  expect(page.locator("h1", { hasText: /Galactic Pizza/i })).toBeTruthy();
  expect(
    page.locator("p", {
      hasText: /2917 Lyndale Ave S, Minneapolis, MN 55408, USA/i,
    }),
  ).toBeTruthy();
});

test("should load the reviews", async ({ page }) => {
  // check for one of the reviews. This is subject to change,
  expect(
    page.locator("p", {
      hasText: /December 21, 2023 at 09:29 PM/i,
    }),
  ).toBeTruthy();
});

test("can go home using the header", async ({ page }) => {
  // get by link text "go home" and click on it
  await page.getByText(/go home/i).click();
  // assert that we're on the home page
  await expect(page).toHaveURL("/");
});

// comented out, added in the readme for future work!
// test("should load the map", async ({ page }) => {
//   // check if the map actually loaded
//   // get map my aria of "map"
//   await page.waitForSelector("[aria-label=map]");
//   const map = page.locator("[aria-label=map]");
//   // check if the map is visible
//   expect(await map.isVisible()).toBeTruthy();
// });
