# Pure-TS-Template project
This is a Pure-TS-Template simulator built with Node.js and TypeScript.

## Features
- Note creation: Allows you to create notes with a title, content and tags;
- **Links between Notes**: Link notes to each other to create a network of information;
- Search and Filters**: Search and filter notes by title, content or tags; *(New Feature)*;
- Visualization of Connections**: Visualize how notes are connected;
- History and Versioning**: Keep a history of changes to notes.

## Installation
1. Clone the repository: 
  ```bash
  git clone <URL-do-repositorio>
  ```
2. Install the dependencies:
```bash
npm install
```
## Use
Start the server:
```bash
npm start
```

## Commands Used

1. **Initialize Project**:
   ```bash
   npm init
   ```
   - Create the `package.json` file.

2. **Install TypeScript and Node Types**:
   ```bash
   npm install typescript @types/node --save-dev
   ```
   - Create and configure `tsconfig.json`.
   - Update `scripts` in `package.json`.

3. **Create Entry File**:
   - Create the file `src/index.ts` and add a simple server with "Hello World".

4. **Transpile TypeScript to JavaScript**:
   ```bash
   tsc index.ts
   ```
   - Transpile the TypeScript file to `index.js`.

5. **Run the Server**:
   ```bash
   npm test
   ```
   - Run `index.js`.

6. **Initialize Git Repository**:
   ```bash
   git init
   ```

7. **Configure Git User**:
   ```bash
   git config --local user.name "Author"
   git config --local user.email "email@email.com"
   ```

8. **Check Git Status**:
   ```bash
   git status
   ```
   - Show the working tree status.

9. **Create .gitignore**:
   - Create the file `.gitignore` and add `node_modules/` and other necessary paths.

10. **Stage and Commit Initial Files**:
    ```bash
    git add .
    git status
    git commit -m "feat: initial project setup with Node.js and TypeScript"
    ```

11. **Install dotenv**:
    ```bash
    npm install dotenv
    ```
    - Create the file `.env`.

12. **Install Express and Types**:
    ```bash
    npm install express @types/express
    ```

13. **Install Jest and Related Packages**:
    ```bash
    npm install --save-dev jest
    npm install --save-dev ts-jest
    npm install --save-dev @types/jest
    ```
      - Create the file `jest.config.ts`.

14. **Install ts-node**:
    ```bash
    npm install ts-node --save-dev
    ```

15. **Install Babel and Presets**:
    ```bash
    npm install --save-dev @babel/cli
    npm install --save-dev @babel/preset-env
    npm install --save-dev @babel/preset-typescript
    ```

16. **Install Mocha**:
    ```bash
    npm install --save-dev mocha
    ```

17. **Create fix-imports.ts**:
    - Create the file `<rootDir>/scripts/fix-imports.ts` to handle `.mjs` imports in the `dist` folder.

18. **Commit Changes**:
    ```bash
    git commit -m "chore: add DotEnv, Express, Jest, Babel, Mocha and TypeScript dependencies"
    ```

## Future:
- [VITE](https://vite.dev/guide/);
- [TESTING-LIBRARY](https://testing-library.com/docs/guiding-principles)

## Contribution
Contributions are welcome! Please see the file `CONTRIBUTING.md` for details.

## License
This project is licensed under the MIT License.