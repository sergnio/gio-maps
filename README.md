# Running for the first time

If you do not have nvm installed (node version manager), please install that using the command provided in this link:
https://github.com/nvm-sh/nvm#install--update-script

**NOTE:** Ensure you're in the project root directory, and replace the XX.XX.XX with whichever node version is declared in the .nvmrc

The command should be similar to this:

```
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/vXX.XX.XX/install.sh | bash
```

Once NVM has been installed, please restart your terminal.

After terminal restarte, run these set of commands to ensure you're on the matching npm version

```
cd gio-maps
nvm use
nvm install
nvm alias default node
nvm exec
nvm run
nvm which
```

Congrats! Now we simply need to add a `.env` file with the API keys, install, and run the project

Copy the `.env.local` file from the email sent from sergio. This can go in your root directory, next to your `package.json`, `app folder`, etc.

And simply run this next command to install the dependencies and run the project in dev mode.

```
npm i && npm run dev
```

or if you prefer, you can use other package managers like yarn or pnpm

```bash
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Running tests
After installing the dependencies, you can run the tests with the following command:

```
npm run test
```

To run E2E tests using Playwright (which runs tests on chromium, firefox, and website) please run the following command:

```
npm run playwright
```
# Highlights
1. The app is fully responsive, and works on mobile, tablet, and desktop, and on most browsers of your choice!
2. This is my biggest project using NextJS, and I'm quite happy with how it turned out.
3. Only 1 third party package, being the Google Maps React component. Everything else is homegrown!
4. Hosted! Visit https://gio-maps.vercel.app/ to see the app in action.

# Known Issues / Future Improvements
Feel free to check out the issues tab for any known issues. Otherwise, the main known issues are as follows:
1. It's quite a simple design. Nothing too fancy, it has two pages. The design could be improved, such as:
   2. A more varied color scheme
   3. A carousel of images for the restaurants
   4. Images for the reviews
   5. Etc.
6. Add code coverage indicator. I know 80% coverage is important. I'm confident I have hit that metric, but it'd be nice for future development to continue to see where the coverage is at.
2. Localization! Ability to change the language of the app.
   3. An easy way would be to use the browser's language settings, having a separate strings file to pull the strings from
   4. A more complex way would be to have a dropdown to select the language, and persist that data in a database
3. Fix the CI/CD pipeline for tests. I haven't used Playwright before and spent a small amount of time to get them running on Github Actions, but since it's out of scope I opted to not spend too much time on it.
4. Preload all the details routes. I'm used to React Query's preloading, but didn't prioritize it over some other features since the details page loads quite fast as is.
5. Somehow not expose my Google Maps API key. The Google Maps comopnent is built for React, not NextJS, so there may be a way to hide it behind a server component.
5. A test to check if the map properly loaded. I think I need to pass the API keys to the test environment!
6. The buttons on the righthand side of the home screen for certain screen sizes are cut off
7. More aria tags! I've added some but there are definitely more that can be added.

## Further features
4. The ability to search for various locations or resturants. The theme was pizza restaurants around Livefront, but this could be expanded to whatever with a search bar.
3. Driving / walking directions to the restaurant with one click of a button
7. The ability to leave a review (although this would require the user to leave genuine reviews since I'm extending the actual google maps API :) )
7. A way to save your favorite restaurants, which would require...
8. A sign in / sign up page, persisting user data
4. Pagination on the search results to have a more expansive list of restaurants
5. "Endless scrolling" on the reviews to have a more expansive list of reviews
