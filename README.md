# Foosball Scores - Frontend

This project aims to provide a client interface for the backend API (https://github.com/mathieumetral/foosball-scores-backend). It allows for tracking scores in foosball matches.

For more technical information, please visit my [Thought Process](https://github.com/mathieumetral/foosball-scores-frontend/blob/main/docs/thought-process.md).

## Prerequisites

- Node.js

## How to run this project

### Run the Development Server

```bash
# Install dependencies
yarn install # or npm install

# Run the development server
yarn dev # or npm run dev
```

### Run the Production Server

```bash
# Install dependencies
yarn install # or npm install

# Build
yarn build # or npm run build

# Run the server
yarn start # or npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Dependencies

Below is a list of dependencies used in this project, along with their purpose:

- `clsx`: A utility for conditionally constructing className strings.
- `next`: Framework for server-rendered React applications.
- `react`: Core React library
- `react-dom`: Enables DOM-specific methods in React.
- `react-loading-skeleton`: A component offering beautiful placeholders during data loading.
- `react-relay`: GraphQL client for React, facilitates backend communication.
- `tailwind-merge`: Merges classnames in custom components to prevent conflicts.
- `valibot`: Client-side form validation, chosen for its 'abortPipeEarly' feature.

### Dev

- `@total-typescript/ts-reset`: Enhances TypeScript behavior (e.g., `JSON.parse` returns `unknown`, `.filter(Boolean)` behaves as expected, and more improvements). [Learn more](https://www.totaltypescript.com/ts-reset).
- `@types/node`: TypeScript type definitions for Node.js.
- `@types/react`: TypeScript type definitions for React.
- `@types/react-dom`: TypeScript type definitions for ReactDOM.
- `@types/react-relay`: TypeScript type definitions for React-Relay.
- `@types/relay-runtime`: TypeScript type definitions for Relay runtime.
- `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser`: Integration of TypeScript with ESLint.
- `autoprefixer`: Necessary for TailwindCSS.
- `esbuild`: Used for building the project.
- `eslint`: Enforces code style and rules.
- `eslint-config-next`: 
- `eslint-plugin-tailwindcss`:
- `postcss`: Necessary for TailwindCSS.
- `prettier`: Guarantees uniform code style.
- `relay-compiler`: Compiles GraphQL queries for Relay.
- `sass`: A preprocessor scripting language that is compiled into CSS.
- `tailwindcss`: A utility-first CSS framework for building custom designs.
- `typescript`: Enables the use of typed JavaScript (TypeScript).
