# TypeScript Starter

## Getting Started

To install the required dependencies, run the following command from the root directory:

```bash
npm i
```

## Scripts

The following script will transpile your TypeScript code in the `src` directory into plain old JavaScript which lives in the `dist` directory. This is the code you deploy.

```bash
npm run build
```

The following script runs your TypeScript locally using a tool called `ts-node`.

```bash
npm start
```

The following script will run tests and give you a summary of which passed/failed. To learn more about testing, check out [Testing](#testing)

```bash
npm test
```

## Testing

This starter comes configured with the [Jest](https://jestjs.io/) testing framework. To create a test file, give it the `.test.ts` file extension.

You can use the `math/add.test.ts` file as an example of how to setup other tests. Feel free to delete this if it's no longer needed.
