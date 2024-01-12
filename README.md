# Running for the first time
If you do not have nvm installed (node version manager), please install that using the command provided in this link:
https://github.com/nvm-sh/nvm#install--update-script

**NOTE:** Ensure you're in the project root directory, and run whichever node version is declared in the .nvmrc

The command should be similar to this:
```
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/vXX.XX.XX/install.sh | bash
```

Once NVM has been installed, run these set of commands to ensure you're on the matching
npm version
```
cd gio-maps
nvm use
nvm install
nvm alias default node
nvm exec
nvm run
nvm which
```

Congrats! Next is to just install and run the project
```
npm i && npm run start
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

~~~~## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
